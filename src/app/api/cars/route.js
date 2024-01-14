// import { conn } from "@/db/db";
import { NextResponse } from "next/server";

import { prisma } from "@/db/db";

// export async function GET() {
//   try {
//     const results = await conn.query("SELECT * FROM FordMunstangs");
//     return NextResponse.json(results);
//   } catch (error) {
//     return NextResponse.json({
//       message: error.message,
//       status: 500,
//     });
//   }
// }

export async function GET() {
  try {
    const results = await prisma.FordMunstangs.findMany();
    return NextResponse.json(results);
    // return res.status(200).json(results);
  } catch (error) {
    return NextResponse.json({
      message: error.message,
      status: 500,
    });
    // return res.status(500).json(error);
  }
}

// export async function POST(request) {
//   try {
//     const {
//       name,
//       PowerSteering,
//       FrontBrakes,
//       RearBrakes,
//       SpecialPackage,
//       MainImgUrl,
//       ImageUrls0,
//       ImageUrls1,
//       ImageUrls2,
//       ImageUrls3,
//       ImageUrls4,
//       Generation,
//       Engine,
//       ProductionYear,
//       EndYear,
//       BodyType,
//       EngineArchitecture,
//       NumberSeats,
//       NumberDoors,
//       FuelType,
//       Power,
//       Displacement,
//       NumberCylinders,
//       EngineConfiguration,
//       FuelInjectionSystem,
//       Distributor,
//       EngineOilCapacity,
//       Length,
//       Width,
//       Height,
//       Wheelbase,
//       TurningDiameter,
//       PropulsionArchitecture,
//       Drivetrain,
//       FrontSuspension,
//       RearSuspension,
//       SteeringType,
//       TiresAndRimSizeSize,
//       Trim,
//       price,
//     } = await request.json();

//     const result = await conn.query("INSERT INTO FordMunstangs SET ?", {
//       name,
//       PowerSteering,
//       FrontBrakes,
//       RearBrakes,
//       SpecialPackage,
//       MainImgUrl,
//       ImageUrls0,
//       ImageUrls1,
//       ImageUrls2,
//       ImageUrls3,
//       ImageUrls4,
//       Generation,
//       Engine,
//       ProductionYear,
//       EndYear,
//       BodyType,
//       EngineArchitecture,
//       NumberSeats,
//       NumberDoors,
//       FuelType,
//       Power,
//       Displacement,
//       NumberCylinders,
//       EngineConfiguration,
//       FuelInjectionSystem,
//       Distributor,
//       EngineOilCapacity,
//       Length,
//       Width,
//       Height,
//       Wheelbase,
//       TurningDiameter,
//       PropulsionArchitecture,
//       Drivetrain,
//       FrontSuspension,
//       RearSuspension,
//       SteeringType,
//       TiresAndRimSizeSize,
//       Trim,
//       price,
//     });

//     return NextResponse.json({
//       name,
//       PowerSteering,
//       FrontBrakes,
//       RearBrakes,
//       SpecialPackage,
//       MainImgUrl,
//       ImageUrls0,
//       ImageUrls1,
//       ImageUrls2,
//       ImageUrls3,
//       ImageUrls4,
//       Generation,
//       Engine,
//       ProductionYear,
//       EndYear,
//       BodyType,
//       EngineArchitecture,
//       NumberSeats,
//       NumberDoors,
//       FuelType,
//       Power,
//       Displacement,
//       NumberCylinders,
//       EngineConfiguration,
//       FuelInjectionSystem,
//       Distributor,
//       EngineOilCapacity,
//       Length,
//       Width,
//       Height,
//       Wheelbase,
//       TurningDiameter,
//       PropulsionArchitecture,
//       Drivetrain,
//       FrontSuspension,
//       RearSuspension,
//       SteeringType,
//       TiresAndRimSizeSize,
//       Trim,
//       price,
//       id: result.insertId,
//     });
//   } catch (error) {
//     return NextResponse.json({ Error: error });
//   }
// }
