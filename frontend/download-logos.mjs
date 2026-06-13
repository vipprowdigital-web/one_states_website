/**
 * download-logos.mjs
 * --------------------------------------------------
 * Run this ONCE to download all brand logos automatically
 * into /public/images/clients/
 *
 * Usage:
 *   node download-logos.mjs
 *
 * Requires Node 18+ (built-in fetch)
 * --------------------------------------------------
 */

import fs from "fs";
import path from "path";

const OUTPUT_DIR = path.join(process.cwd(), "public", "images", "clients");

// brand name -> { file, domain }
const CLIENTS = [
  { file: "atmosphere.png", domain: "atmosphereresorts.com" },
  { file: "byke.png", domain: "byketransport.com" },
  { file: "lords.png", domain: "lordshotels.com" },
  { file: "tivoli.png", domain: "thetivolihotels.com" },
  { file: "clarks-inn.png", domain: "clarksinn.in" },
  { file: "saltstayz.png", domain: "saltstayz.com" },
  { file: "oyo-sunday.png", domain: "oyorooms.com" },
  { file: "the-park.png", domain: "theparkhotels.com" },
  { file: "fern-hotel.png", domain: "fernhotels.com" },
  { file: "country-inn.png", domain: "radissonhotels.com" },
  { file: "itc.png", domain: "itchotels.com" },
  { file: "radisson.png", domain: "radissonhotels.com" },
  { file: "hilton.png", domain: "hilton.com" },
  { file: "taj.png", domain: "tajhotels.com" },
  { file: "zolo-stays.png", domain: "zolostays.com" },
  { file: "olive-hospitality.png", domain: "olivehospitality.com" },
  { file: "leisure-hotel.png", domain: "leisurehotels.in" },
  { file: "justa.png", domain: "justahotels.com" },
  { file: "lemon-tree.png", domain: "lemontreehotels.com" },
  { file: "pride-hotel.png", domain: "pridehotel.com" },
  { file: "sarover-portico.png", domain: "sarovarhotels.com" },
  { file: "tamara-leisure.png", domain: "tamaraleisure.com" },
  { file: "world-hotel.png", domain: "worldhotels.com" },
  { file: "royal-orchid.png", domain: "royalorchidhotels.com" },
  { file: "holiday-inn.png", domain: "ihg.com" },
  { file: "cygnet.png", domain: "cygnetletting.com" },
  { file: "club-mahindra.png", domain: "clubmahindra.com" },
  { file: "vits-kamat.png", domain: "vitsluxuryhotels.com" },
  { file: "hosteller.png", domain: "hosteller.com" },
  { file: "ramada.png", domain: "wyndhamhotels.com" },
  { file: "levelup.png", domain: "levelup.com" },
];

async function downloadLogo({ file, domain }) {
  const url = `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);

    const buffer = Buffer.from(await res.arrayBuffer());
    const filePath = path.join(OUTPUT_DIR, file);

    fs.writeFileSync(filePath, buffer);
    console.log(`✅ Saved: ${file}`);
  } catch (err) {
    console.error(`❌ Failed: ${file} (${domain}) — ${err.message}`);
  }
}

async function main() {
  // ensure output folder exists
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  console.log(`📁 Saving logos to: ${OUTPUT_DIR}\n`);

  for (const client of CLIENTS) {
    await downloadLogo(client);
    // small delay to avoid rate limiting
    await new Promise((r) => setTimeout(r, 200));
  }

  console.log("\n🎉 Done! Check /public/images/clients/ folder.");
  console.log("⚠️  Note: some logos may be low-res favicons.");
  console.log("    Replace any low-quality ones manually if needed.");
}

main();
