import prisma from "../src/lib/prisma";

async function main() {
  console.log("Seeding database...");

  const user = await prisma.user.create({
    data: {
      email: "test@example.com",
      password: "password123",
      role: "landlord"
    }
  });

  const property = await prisma.property.create({
    data: {
      address: "1 Example Road",
      city: "London",
      postcode: "E1 1AA",
      propertyType: "HMO",
      userId: user.id,

      gasSafety: { create: { status: "missing" } },
      eicr: { create: { status: "missing" } },
      epc: { create: { status: "missing" } },
      fireSafety: { create: { status: "missing" } },
      alarms: { create: { status: "non_compliant" } },
      licence: { create: { status: "not_required" } },
      checklist: { create: { status: "incomplete" } }
    },
    include: {
      gasSafety: true,
      eicr: true,
      epc: true,
      fireSafety: true,
      alarms: true,
      licence: true,
      checklist: true
    }
  });

  console.log("User created:", user.id);
  console.log("Property created:", property.id);
}

main()
  .then(() => {
    console.log("Seeding completed.");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
