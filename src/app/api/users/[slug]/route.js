// import prisma from "@/utils/connect";
// import { NextResponse } from "next/server";

// // GET SINGLE POST
// export const GET = async (req, { params }) => {
//   const { email } = params;
//   // console.log("params", params);

//   try {
//     const user = await prisma.user.findUnique({
//       where: { email },
//       // include: { user: true },
//     });

//     return new NextResponse(JSON.stringify(user, { status: 200 }));
//   } catch (err) {
//     console.log(err);
//     return new NextResponse(
//       JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
//     );
//   }
// };
