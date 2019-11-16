exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("cars")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("cars").insert([
        {
          id: 1,
          vin: "WBADW7C56CE005160",
          make: "Volkswagen",
          model: "GTI",
          mileage: 1279
        },
        {
          id: 2,
          vin: "WA1CGBFE6ED318710",
          make: "Ford",
          model: "Expedition EL",
          mileage: 27684
        },
        {
          id: 3,
          vin: "1G4GA5GR9DF642213",
          make: "Toyota",
          model: "Tercel",
          mileage: 21417
        },
        {
          id: 4,
          vin: "5UXZV8C51CL049644",
          make: "GMC",
          model: "Yukon",
          mileage: 5353
        },
        {
          id: 5,
          vin: "5N1AR2MM5EC927788",
          make: "Chrysler",
          model: "Concorde",
          mileage: 29554
        },
        {
          id: 6,
          vin: "JN1AZ4FH4FM746695",
          make: "Mitsubishi",
          model: "Lancer",
          mileage: 28366
        },
        {
          id: 7,
          vin: "4T1BF1FKXFU262563",
          make: "Ford",
          model: "Ranger",
          mileage: 23784
        },
        {
          id: 8,
          vin: "1G6DM8E37D0549789",
          make: "Mitsubishi",
          model: "Eclipse",
          mileage: 34503
        },
        {
          id: 9,
          vin: "KMHTC6AD3EU622550",
          make: "Lincoln",
          model: "MKZ",
          mileage: 22484
        },
        {
          id: 10,
          vin: "JTDKDTB36F1495653",
          make: "Pontiac",
          model: "Montana SV6",
          mileage: 20683
        },
        {
          id: 11,
          vin: "WA1CGAFP8FA219207",
          make: "Volkswagen",
          model: "Cabriolet",
          mileage: 20096
        },
        {
          id: 12,
          vin: "1N6AF0KX6EN298526",
          make: "Audi",
          model: "A5",
          mileage: 23140
        },
        {
          id: 13,
          vin: "1G6AA5RA1D0460271",
          make: "Cadillac",
          model: "Fleetwood",
          mileage: 3070
        },
        {
          id: 14,
          vin: "1FTNF2A53AE651554",
          make: "Nissan",
          model: "Frontier",
          mileage: 23227
        },
        {
          id: 15,
          vin: "KM8JT3AB2CU112403",
          make: "Mazda",
          model: "CX-7",
          mileage: 3349
        }
      ]);
    });
};
