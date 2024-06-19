import { NextRequest, NextResponse } from "next/server";
import prisma, { connect } from "../../../../../utils/prisma";

export const GET = async(_:NextRequest,{params}:{params:{id:number}})=>{
  try {
    await connect();
    const productId = Math.trunc(params.id);
    
    const product = await prisma.prices.findMany(
      {where:{
        product_id:productId,
      },
        include:
        {product:true,
          store:true,
        }
      })
      
      if (!product){
        return NextResponse.json(
        { message: "商品が存在しません"},
        {status:404}
        )
      }
      return NextResponse.json(
        { message: "取得成功", products: product },
        {status:200});
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "取得に失敗しました" },
      { status: 500 }
    );
  }
}

// 取得はキャッシュを利用せずにリクエスト毎に最新のものを取得する
// export const dynamic = "force-dynamic"