var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  M: () => Modal,
  a: () => activePaper,
  b: () => addQuestionModal,
  c: () => activeQuestion,
  d: () => deletePaperModal,
  e: () => deleteQuestionModal,
  f: () => editQuestionModal,
  g: () => sharedPapers,
  h: () => allPapers,
  s: () => startPaperModal
});
module.exports = __toCommonJS(stdin_exports);
var import_user_843637aa = require("./user-843637aa.js");
var import_index_62ca9411 = require("./index-62ca9411.js");
var Modal_svelte_svelte_type_style_lang = "";
const css = {
  code: ".backdrop.svelte-1josomj{position:fixed;inset:-10rem;z-index:10;opacity:0.8;background-color:black}main.svelte-1josomj{position:fixed;left:0;top:0;bottom:0;right:0;z-index:10000;display:grid;place-items:center;width:100%;height:100%;overflow:auto}",
  map: null
};
function modalStore() {
  const { subscribe, set, update } = (0, import_user_843637aa.w)(false);
  const open = () => set(true);
  const close = () => set(false);
  const toggle = () => update((t) => !t);
  return {
    subscribe,
    set,
    update,
    open,
    close,
    toggle
  };
}
const Modal = (0, import_index_62ca9411.c)(($$result, $$props, $$bindings, slots) => {
  const dispatch = (0, import_index_62ca9411.i)();
  let { open = false } = $$props;
  let { closeOnOutsideClick = false } = $$props;
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.closeOnOutsideClick === void 0 && $$bindings.closeOnOutsideClick && closeOnOutsideClick !== void 0)
    $$bindings.closeOnOutsideClick(closeOnOutsideClick);
  $$result.css.add(css);
  open && dispatch("open");
  return `${open ? `<div class="${"backdrop svelte-1josomj"}"></div>
	<main class="${"svelte-1josomj"}">${slots.default ? slots.default({}) : ``}</main>` : ``}`;
});
var papers = [
  {
    id: 397257541576,
    name: "NEET 2017 A",
    questions: [
      {
        id: 176890982949,
        answer: 865842951413,
        options: [
          {
            id: 213991968086,
            text: "Apoenzyme = Holoenzyme + Coenzyme"
          },
          {
            id: 865842951413,
            text: "Holoenzyme = Apoenzyme + Coenzyme"
          },
          {
            id: 638187961567,
            text: "Coenzyme = Apoenzyme + Holoenzyme"
          },
          {
            id: 477799028594,
            text: "Holoenzyme = Coenzyme + Co-factor"
          }
        ],
        subject: "Biology",
        chapter: "Biomolecules",
        text: "Which one of the following statements is correct with reference to enzymes?"
      },
      {
        id: 671521863249,
        answer: 728021423428,
        options: [
          {
            id: 993660361572,
            text: "Argentaffin cells"
          },
          {
            id: 728021423428,
            text: "Paneth cells"
          },
          {
            id: 553788652717,
            text: "Zymogen cells"
          },
          {
            id: 126070986487,
            text: "Kupffer cells"
          }
        ],
        subject: "Biology",
        chapter: "Biomolecules",
        text: "Which cells of 'Crypts of Lieberkuhn' secrete antibacterial lysozyme?"
      },
      {
        id: 573808719737,
        answer: 452217491069,
        options: [
          {
            id: 808032667383,
            text: "\\(C_3\\) plants"
          },
          {
            id: 452217491069,
            text: "\\(C_4\\) plants"
          },
          {
            id: 469230507625,
            text: "\\(C_2\\) plants"
          },
          {
            id: 739453834254,
            text: "\\(C_3\\) and \\(C_4\\) plants"
          }
        ],
        subject: "Biology",
        chapter: "Photosynthesis in Higher Plants",
        text: "Phosphoenol pyruvate (PEP) is the primary \\(CO_2\\) acceptor in:"
      },
      {
        id: 526137550480,
        answer: 642998530775,
        options: [
          {
            id: 642998530775,
            text: "1"
          },
          {
            id: 358037464818,
            text: "2"
          },
          {
            id: 226694031810,
            text: "3"
          },
          {
            id: 392884053999,
            text: "4"
          }
        ],
        subject: "Biology",
        chapter: "Reproductive Health",
        text: "Match the following.",
        image: "https://i.ibb.co/27RkFhC/Screenshot-2022-04-02-20-42-04-195-letest-ncertbooks.jpg"
      },
      {
        id: 233390517395,
        answer: 835971135142,
        options: [
          {
            id: 282425685737,
            text: "Bacillus"
          },
          {
            id: 808539340691,
            text: "Pseudomonas"
          },
          {
            id: 835971135142,
            text: "Mycoplasma"
          },
          {
            id: 355661759691,
            text: "Nostoc"
          }
        ],
        subject: "Biology",
        chapter: "Biological Classification",
        text: "Which among the following are the smallest living cells, known without a definite cell wall, pathogenic to plants as well as animals and can survive without oxygen?"
      },
      {
        id: 979829154230,
        answer: 976763441669,
        options: [
          {
            id: 976763441669,
            text: "1856 - 1863"
          },
          {
            id: 810442504786,
            text: "1840 - 1850"
          },
          {
            id: 398611338611,
            text: "1857 - 1869"
          },
          {
            id: 753782026453,
            text: "1870 - 1877"
          }
        ],
        subject: "Biology",
        chapter: "Principles of Inheritance and Variation",
        text: "Which one from those given below is the periods for Mendel's hybridization experiments?"
      },
      {
        id: 490614795392,
        answer: 472720679834,
        options: [
          {
            id: 768524288131,
            text: "Water"
          },
          {
            id: 394406674360,
            text: "Bee"
          },
          {
            id: 472720679834,
            text: "Wind"
          },
          {
            id: 787175617421,
            text: "Bat"
          }
        ],
        subject: "Biology",
        chapter: "Sexual Reproduction in Flowering Plants",
        text: "Flowers which have single ovule in the ovary and are packed into inflorescence are usually pollinated by:"
      },
      {
        id: 318661400613,
        answer: 422037599363,
        options: [
          {
            id: 825886374092,
            text: "The value of 'r' approaches zero"
          },
          {
            id: 422037599363,
            text: "K = N"
          },
          {
            id: 510174042737,
            text: "K > N"
          },
          {
            id: 726281082077,
            text: "K < N"
          }
        ],
        subject: "Biology",
        chapter: "Organisms and Populations",
        text: "Asymptote in a logistic growth curve is obtained when:"
      },
      {
        id: 421488016149,
        answer: 698533777495,
        options: [
          {
            id: 698533777495,
            text: "1"
          },
          {
            id: 708445942494,
            text: "2"
          },
          {
            id: 581549275599,
            text: "3"
          },
          {
            id: 711236331324,
            text: "4"
          }
        ],
        subject: "Biology",
        chapter: "Locomotion and Movement",
        text: "Out of 'X' pairs of ribs in humans only 'Y' pairs are true ribs. Select the option that correctly represents values of X and Y and provides their explanation:",
        image: "https://i.ibb.co/h82pSc6/Screenshot-2022-04-02-21-10-59-922-letest-ncertbooks.jpg"
      },
      {
        id: 296594826542,
        answer: 832111390962,
        options: [
          {
            id: 832111390962,
            text: "50%"
          },
          {
            id: 634113630479,
            text: "20%"
          },
          {
            id: 110107880028,
            text: "70%"
          },
          {
            id: 708600330007,
            text: "10%"
          }
        ],
        subject: "Biology",
        chapter: "Human Health and Disease",
        text: "MALT constitutes about _______ percent of the lymphoid tissue in human body."
      },
      {
        id: 228383768761,
        answer: 276275061791,
        options: [
          {
            id: 276275061791,
            text: "mating of related individuals of same breed"
          },
          {
            id: 603099428183,
            text: "mating of unrelated individuals of same breed"
          },
          {
            id: 573965884519,
            text: "mating of individuals of different breed"
          },
          {
            id: 855366371191,
            text: "mating of individuals of different species"
          }
        ],
        subject: "Biology",
        chapter: "Principles of Inheritance and Variation",
        text: "Homozygous purelines in cattle can be obtained by:"
      },
      {
        id: 919010869726,
        answer: 815267361757,
        options: [
          {
            id: 930567599035,
            text: "Stem - Tall of Dwarf"
          },
          {
            id: 815267361757,
            text: "Trichomes - Glandular or non-glandular"
          },
          {
            id: 209531998294,
            text: "Seed - Green or Yellow"
          },
          {
            id: 437648026232,
            text: "Pod - Inflated or Constricted"
          }
        ],
        subject: "Biology",
        chapter: "Principles of Inheritance and Variation",
        text: "Among the following characters, which one was not considered by Mendel in his experiments on pea?"
      },
      {
        id: 982233580467,
        answer: 806133480671,
        options: [
          {
            id: 522986179128,
            text: "Lysosome"
          },
          {
            id: 209686637494,
            text: "Ribosome"
          },
          {
            id: 794653901206,
            text: "Chloroplast"
          },
          {
            id: 806133480671,
            text: "Mitochondrion"
          }
        ],
        subject: "Biology",
        chapter: "Cell",
        text: "Which of the following cell organelles is responsible for extracting energy from carbohydrates to form ATP?"
      },
      {
        id: 208065402710,
        answer: 161532413097,
        options: [
          {
            id: 408394728898,
            text: "1"
          },
          {
            id: 938976329699,
            text: "11"
          },
          {
            id: 161532413097,
            text: "33"
          },
          {
            id: 555399232548,
            text: "333"
          }
        ],
        subject: "Biology",
        chapter: "Molecular Basis of Inheritance",
        text: "If there are 999 bases in RNA that codes for a protein with 333 amino acids, and the base at position 901 is deleted such that the length of the RNA becomes 998 bases, how many codons will be altered?"
      },
      {
        id: 116451432855,
        answer: 302938578789,
        options: [
          {
            id: 302938578789,
            text: "Archaebacteria"
          },
          {
            id: 114407554084,
            text: "Eubacteria"
          },
          {
            id: 824932105102,
            text: "Cyanobacteria"
          },
          {
            id: 765514149640,
            text: "Mycobacteria"
          }
        ],
        subject: "Biology",
        chapter: "Biological Classification",
        text: "Which of the following are found in extreme saline conditions?"
      },
      {
        id: 386123835091,
        answer: 920315970412,
        options: [
          {
            id: 572152927383,
            text: "membranes of synaptic vesicles"
          },
          {
            id: 316292771443,
            text: "pre-synaptic membrane"
          },
          {
            id: 858343682455,
            text: "tips of axons"
          },
          {
            id: 920315970412,
            text: "post-synaptic membrane"
          }
        ],
        subject: "Biology",
        chapter: "Neural Control and Coordination",
        text: "Receptor sites for neurotransmitters are present on:"
      },
      {
        id: 541627816082,
        answer: 519885737991,
        options: [
          {
            id: 655413619624,
            text: "stabilizing selection as it stabilizes this character in the population"
          },
          {
            id: 519885737991,
            text: "directional as it pushes the mean of the character in one direction"
          },
          {
            id: 704197296075,
            text: "disruptive as it splits the population into two, one yielding higher output and the other lower output"
          },
          {
            id: 176363133157,
            text: "stabilizing followed by disruptive as it stabilizes the population to produce higher yielding cows."
          }
        ],
        subject: "Biology",
        chapter: "Evolution",
        text: "Artificial selection to obtain cows yielding higher milk output represents:"
      },
      {
        id: 681873483594,
        answer: 749987775149,
        options: [
          {
            id: 382032453800,
            text: "Heart"
          },
          {
            id: 533000531291,
            text: "Stomach"
          },
          {
            id: 919475553295,
            text: "Kidneys"
          },
          {
            id: 749987775149,
            text: "Intestine"
          }
        ],
        subject: "Biology",
        chapter: "Body Fluids and Circulation",
        text: "The hepatic portal vein drains blood to liver from"
      },
      {
        id: 809862191713,
        answer: 534270981666,
        options: [
          {
            id: 534270981666,
            text: "Zero"
          },
          {
            id: 885256007483,
            text: "Less than zero"
          },
          {
            id: 594412398427,
            text: "More than zero but less than one"
          },
          {
            id: 468506039151,
            text: "More than one"
          }
        ],
        subject: "Biology",
        chapter: "Transport in Plants",
        text: "The water potential of pure water is:"
      },
      {
        id: 570812397442,
        answer: 585377290500,
        options: [
          {
            id: 538895854973,
            text: "Equidae"
          },
          {
            id: 585377290500,
            text: "Perissodactyla"
          },
          {
            id: 719003337505,
            text: "Caballus"
          },
          {
            id: 716549900187,
            text: "Ferus"
          }
        ],
        subject: "Biology",
        chapter: "Biological Classification",
        text: "Which of the following represents order of 'Horse'"
      },
      {
        id: 299729994786,
        answer: 727779355898,
        options: [
          {
            id: 811192964435,
            text: "Ecological Biodiversity"
          },
          {
            id: 142419593091,
            text: "Laws of limiting factor"
          },
          {
            id: 727779355898,
            text: "Species area relationship"
          },
          {
            id: 946272918814,
            text: "Population Growth equation"
          }
        ],
        subject: "Biology",
        chapter: "Biodiversity and Conservation",
        text: "Alexander Von Humbolt described for the first time:"
      },
      {
        id: 834165206170,
        answer: 109787858047,
        options: [
          {
            id: 356735414893,
            text: "Positively charged"
          },
          {
            id: 109787858047,
            text: "Negatively charged"
          },
          {
            id: 851392705091,
            text: "Neutral"
          },
          {
            id: 738754278088,
            text: "Either positively or negatively charged depending on their size"
          }
        ],
        subject: "Biology",
        chapter: "Biotechnology - Principles and Processes",
        text: "DNA fragments are:"
      },
      {
        id: 532964995907,
        answer: 420073385114,
        options: [
          {
            id: 887434417736,
            text: "Incisors"
          },
          {
            id: 696869574404,
            text: "Canines"
          },
          {
            id: 420073385114,
            text: "Premolars"
          },
          {
            id: 440494479371,
            text: "Molars"
          }
        ],
        subject: "Biology",
        chapter: "Digestion and Absorption",
        text: "A baby boy aged two years is admitted to play school and passes through a dental check up. The dentist observed that boy had twenty teeth. Which teeth are absent?"
      },
      {
        id: 774516235933,
        answer: 356972889910,
        options: [
          {
            id: 895550373422,
            text: "Chromosomes will not condense"
          },
          {
            id: 142264438746,
            text: "Chromosomes will be fragmented"
          },
          {
            id: 356972889910,
            text: "Chromosomes will not segregate"
          },
          {
            id: 139513972039,
            text: "Recombination of chromosome arms will occur"
          }
        ],
        subject: "Biology",
        chapter: "Cell Cycle and Cell Division",
        text: "Anaphase promoting Complex (APC) is a protein degradation machinery necessary for proper mitosis of animal cells. If APC is defective in a human cell, which of the following is expected to occur?"
      },
      {
        id: 734785962474,
        answer: 658618463073,
        options: [
          {
            id: 665106425710,
            text: "Absence of notochord"
          },
          {
            id: 361835131943,
            text: "Ventral tubular nerve cord"
          },
          {
            id: 658618463073,
            text: "Pharynx with gill slits"
          },
          {
            id: 249569844394,
            text: "Pharynx without gill slits"
          }
        ],
        subject: "Biology",
        chapter: "Animal Kingdom",
        text: "An important characteristic that hemichordates share with Chordates is"
      },
      {
        id: 293398205132,
        answer: 935052458759,
        options: [
          {
            id: 658663905053,
            text: "3 genotypes : 3 phenotypes"
          },
          {
            id: 526561283169,
            text: "3 genotypes : 4 phenotypes"
          },
          {
            id: 935052458759,
            text: "4 genotypes : 3 phenotypes"
          },
          {
            id: 292614969001,
            text: "4 genotypes : 4 phenotypes"
          }
        ],
        subject: "Biology",
        chapter: "Principles of Inheritance and Variation",
        text: "The genotypes of a Husband and Wife are \\(I^AI^B\\) and \\(I^Ai\\). Among the blood types of their children how many different genotypes and phenotypes are possible"
      },
      {
        id: 402160104656,
        answer: 566203162180,
        options: [
          {
            id: 864467640152,
            text: "Autoimmune response"
          },
          {
            id: 566203162180,
            text: "Cell mediated immune response"
          },
          {
            id: 613794068162,
            text: "Hormonal immune response"
          },
          {
            id: 588500600993,
            text: "Physiological immune response"
          }
        ],
        subject: "Biology",
        chapter: "Human Health and Disease",
        text: "Transplantation of tissues / organs fails often due to non-acceptance by the patient's body. Which type of immune responses is responsible for such rejection"
      },
      {
        id: 534964279090,
        answer: 838819888358,
        options: [
          {
            id: 838819888358,
            text: "only (d)"
          },
          {
            id: 185482532648,
            text: "only (a)"
          },
          {
            id: 113807881923,
            text: "(a), (c), and (d)"
          },
          {
            id: 620764136897,
            text: "(b) and (c)"
          }
        ],
        subject: "Biology",
        chapter: "Body Fluids and Circulation",
        text: "Adult human RBCs are enucleate. Which of the following statement(s) is / are not most appropriate explanation for this feature?",
        image: "https://i.ibb.co/ykwwyXW/Screenshot-2022-04-03-17-07-58-027-letest-ncertbooks.jpg"
      },
      {
        id: 814439433444,
        answer: 236200325918,
        options: [
          {
            id: 236200325918,
            text: "Residual Volume"
          },
          {
            id: 661442600541,
            text: "Inspiratory Reserve Volume"
          },
          {
            id: 331417772164,
            text: "Tidal Volume"
          },
          {
            id: 673670165600,
            text: "Expiratory Reserve Volume"
          }
        ],
        subject: "Biology",
        chapter: "Breathing and Exchange of Gases",
        text: "Lungs are made up of air filled sacs, the alveoli. They do not collapse even after forceful expiration because of"
      },
      {
        id: 794686301498,
        answer: 310217308779,
        options: [
          {
            id: 130793411451,
            text: "Marchantia"
          },
          {
            id: 269984185217,
            text: "Fucus"
          },
          {
            id: 434896691453,
            text: "Funnaria"
          },
          {
            id: 310217308779,
            text: "Chlamydomonas"
          }
        ],
        subject: "Biology",
        chapter: "Plant Kingdom",
        text: "Zygotic meiosis is characteristic of"
      },
      {
        id: 664573920696,
        answer: 189666030346,
        options: [
          {
            id: 646934537766,
            text: "Testes -> Bidder's canal -> Kidney -> Vasa efferentia -> Urinogenital duct -> Cloaca"
          },
          {
            id: 146429339181,
            text: "Testes -> Vasa efferentia -> Kidney -> Seminal vesicle -> Urinogenital duct -> Cloaca"
          },
          {
            id: 938902333099,
            text: "Testes -> Vasa efferentia -> Bider's canal -> Ureter  -> Cloaca"
          },
          {
            id: 189666030346,
            text: "Testes -> Vasa efferentia -> Kidney -> Bider's canal  -> Urinogenital duct -> Cloaca"
          }
        ],
        subject: "Biology",
        chapter: "Structural Organisation in Animals",
        text: "Select the correct route for the passage of sperms in male frogs"
      },
      {
        id: 645243395394,
        answer: 813698463207,
        options: [
          {
            id: 693758578669,
            text: "They are harmful to human health"
          },
          {
            id: 725925738284,
            text: "They alter rainfall and monsoon patterns"
          },
          {
            id: 813698463207,
            text: "They cause increased agricultural productivity"
          },
          {
            id: 640054510780,
            text: "They have negative impact on agricultural land"
          }
        ],
        subject: "Biology",
        chapter: "Enviromental Issues",
        text: "Which one of the following statements is not valid for aerosols"
      },
      {
        id: 632533250593,
        answer: 489440746520,
        options: [
          {
            id: 107118988039,
            text: "The leading strand towards replication fork"
          },
          {
            id: 628273935242,
            text: "The lagging strand towards replication fork"
          },
          {
            id: 920617930899,
            text: "The leading strand away from replication fork"
          },
          {
            id: 489440746520,
            text: "The lagging strand away from the replication fork"
          }
        ],
        subject: "Biology",
        chapter: "Molecular Basis of Inheritance",
        text: "During DNA replication, Okazaki fragments are used to elongate"
      },
      {
        id: 918062488322,
        answer: 985872839400,
        options: [
          {
            id: 315529738948,
            text: "Mesophytes"
          },
          {
            id: 985872839400,
            text: "Halophytes"
          },
          {
            id: 950525497742,
            text: "Psammophytes"
          },
          {
            id: 159584104365,
            text: "Hydrophytes"
          }
        ],
        subject: "Biology",
        chapter: "Organisms and Populations",
        text: "Plants which produce characteristic Pneumatophores and show vivipary belong to"
      },
      {
        id: 722759921881,
        answer: 851170668820,
        options: [
          {
            id: 248928885306,
            text: "Upstream processing"
          },
          {
            id: 851170668820,
            text: "Downstream processing"
          },
          {
            id: 768885556577,
            text: "Bioprocessing"
          },
          {
            id: 216644151552,
            text: "Postproduction processing"
          }
        ],
        subject: "Biology",
        chapter: "Biotechnology - Principles and Processes",
        text: "The process of seperation and purification of expressed protein before marketing is called"
      },
      {
        id: 652244020912,
        answer: 902441815082,
        options: [
          {
            id: 337952154161,
            text: "DNA molecules with protein coat"
          },
          {
            id: 135939773842,
            text: "DNA molecules without protein coat"
          },
          {
            id: 219455011739,
            text: "RNA molecules with protein coat"
          },
          {
            id: 902441815082,
            text: "RNA molecules without protein coat"
          }
        ],
        subject: "Biology",
        chapter: "Biological Classification",
        text: "Viroids differ from viruses in having"
      },
      {
        id: 844188067325,
        answer: 790249294979,
        options: [
          {
            id: 183050464332,
            text: "Organic compounds are deposited in it"
          },
          {
            id: 468570589518,
            text: "It is highly durable"
          },
          {
            id: 790249294979,
            text: "It conducts water and minerals efficiently"
          },
          {
            id: 609230174084,
            text: "It comprises dead elements with highly lignified walls"
          }
        ],
        subject: "Biology",
        chapter: "Anatomy of Flowering Plants",
        text: "Identify the wrong statement in context of heartwood"
      },
      {
        id: 289810707840,
        answer: 490270806031,
        options: [
          {
            id: 619514254773,
            text: "Plants"
          },
          {
            id: 762586091305,
            text: "Fungi"
          },
          {
            id: 425763559887,
            text: "Animals"
          },
          {
            id: 490270806031,
            text: "Bacteria"
          }
        ],
        subject: "Biology",
        chapter: "Molecular Basis of Inheritance",
        text: "Spliceosomes are not found in cells of"
      },
      {
        id: 300973140495,
        answer: 971858013657,
        options: [
          {
            id: 971858013657,
            text: "The ascending limb of loop of henle is impermeable to water"
          },
          {
            id: 195048029783,
            text: "The descending limb of loop of henle is impermeable to water"
          },
          {
            id: 605705767715,
            text: "The ascending limb of loop of henle is permeable to water"
          },
          {
            id: 799374984402,
            text: "The descending limb of loop of henle is permeable to electrolytes"
          }
        ],
        subject: "Biology",
        chapter: "Excretory Products and their Elimination",
        text: "Which of the following statements is correct"
      },
      {
        id: 618252253442,
        answer: 388380349980,
        options: [
          {
            id: 388380349980,
            text: "Forest ecosystem"
          },
          {
            id: 432792316454,
            text: "Grassland ecosystem"
          },
          {
            id: 796714283461,
            text: "Pond ecosystem"
          },
          {
            id: 358376209521,
            text: "Lake ecosystem"
          }
        ],
        subject: "Biology",
        chapter: "Ecosystem",
        text: "Which ecosystem has the maximum biomass"
      },
      {
        id: 755937181177,
        answer: 506819932851,
        options: [
          {
            id: 530092819142,
            text: "Griffith"
          },
          {
            id: 506819932851,
            text: "Hershey and Chase"
          },
          {
            id: 522960483988,
            text: "Avery, MacLeod and McCarty"
          },
          {
            id: 452666007584,
            text: "Hargobind Khorana"
          }
        ],
        subject: "Biology",
        chapter: "Molecular Basis of Inheritance",
        text: "The final proof for DNA as the genetic material came from the experiments of"
      },
      {
        id: 394659585774,
        answer: 894672681535,
        options: [
          {
            id: 894672681535,
            text: "They suppress sperm motility and fertilizing capacity of sperms"
          },
          {
            id: 802558369645,
            text: "They inhibit gametogenesis"
          },
          {
            id: 346827966124,
            text: "They make uterus unsuitable for implantation"
          },
          {
            id: 835342870237,
            text: "They inhibit ovulation"
          }
        ],
        subject: "Biology",
        chapter: "Reproductive Health",
        text: "The function of copper ions in copper releasing IUD's is"
      },
      {
        id: 998227272393,
        answer: 361770873333,
        options: [
          {
            id: 525206861548,
            text: "Chlorella"
          },
          {
            id: 361770873333,
            text: "Volvox"
          },
          {
            id: 534023077486,
            text: "Ulothrix"
          },
          {
            id: 546938559372,
            text: "Spirogyra"
          }
        ],
        subject: "Biology",
        chapter: "Plant Kingdom",
        text: "An example of colonial alga is"
      },
      {
        id: 623791974346,
        answer: 455098162426,
        options: [
          {
            id: 455098162426,
            text: "Maturation"
          },
          {
            id: 685202940448,
            text: "Elongation"
          },
          {
            id: 159500282274,
            text: "Root cap"
          },
          {
            id: 582514729949,
            text: "Meristematic activity"
          }
        ],
        subject: "Biology",
        chapter: "Anatomy of Flowering Plants",
        text: "Root hairs develop from the region of:"
      },
      {
        id: 798516088684,
        answer: 319065383591,
        options: [
          {
            id: 968782618722,
            text: "Growth Hormone becomes inactive in adults"
          },
          {
            id: 319065383591,
            text: "Epiphyseal plates close after adolescence"
          },
          {
            id: 411797417742,
            text: "Bones loose their sensitivity of Growth Hormone in adults"
          },
          {
            id: 364510567292,
            text: "Muscle fibres do not grow in size after birth"
          }
        ],
        subject: "Biology",
        chapter: "Chemical Coordination and Integration",
        text: "Hypersecretion of Growth Hormone in adults does not cause furhter increase in height, because:"
      },
      {
        id: 218264420038,
        answer: 304499012351,
        options: [
          {
            id: 307438688488,
            text: "Tertiary treatment"
          },
          {
            id: 955097895995,
            text: "Secondary treatment"
          },
          {
            id: 304499012351,
            text: "Primary treatment"
          },
          {
            id: 389832382949,
            text: "Sludge treatment"
          }
        ],
        subject: "Biology",
        chapter: "Microbes in Human Welfare",
        text: "Which of the following in sewage treatment removes suspended solids?"
      },
      {
        id: 354276478283,
        answer: 871867190828,
        options: [
          {
            id: 871867190828,
            text: "1"
          },
          {
            id: 198799158252,
            text: "2"
          },
          {
            id: 259846666542,
            text: "3"
          },
          {
            id: 926399310604,
            text: "4"
          }
        ],
        subject: "Biology",
        chapter: "Plant Kingdom",
        text: "Select the mismatch:",
        image: "https://i.ibb.co/559LKC7/Screenshot-2022-04-04-13-47-15-995-letest-ncertbooks.jpg"
      },
      {
        id: 327325817282,
        answer: 784203185194,
        options: [
          {
            id: 486513486702,
            text: "The larger the fragment size, the farther it moves"
          },
          {
            id: 784203185194,
            text: "The smaller the fragment size, the farther it moves"
          },
          {
            id: 298985103875,
            text: "Positive charged fragment moves to farther end"
          },
          {
            id: 353166702490,
            text: "Negatively charged fragments do not move"
          }
        ],
        subject: "Biology",
        chapter: "Biotechnology - Principles and Processes",
        text: "What is the criterion for DNA fragments movement on agaros gel during gel electrophoresis"
      },
      {
        id: 965816191380,
        answer: 547684660684,
        options: [
          {
            id: 317276333302,
            text: "Stipules"
          },
          {
            id: 309751671423,
            text: "Adventitous root"
          },
          {
            id: 547684660684,
            text: "Stem"
          },
          {
            id: 348099506917,
            text: "Leaf"
          }
        ],
        subject: "Biology",
        chapter: "Morphology of Flowering Plants",
        text: "In Bougainvillea thorns are the modification of:"
      },
      {
        id: 630440729906,
        answer: 626986277389,
        options: [
          {
            id: 943003527448,
            text: "Transcription is occuring"
          },
          {
            id: 462279480072,
            text: "DNA replication is occuring"
          },
          {
            id: 626986277389,
            text: "The DNA is condensed into a Chromatin Fibre"
          },
          {
            id: 953878343119,
            text: "The DNA double helix is exposed"
          }
        ],
        subject: "Biology",
        chapter: "Molecular Basis of Inheritance",
        text: "The association of histone H1 with a nucleosome indicates:"
      },
      {
        id: 202472129745,
        answer: 833495275531,
        options: [
          {
            id: 602619245774,
            text: "Pineal gland"
          },
          {
            id: 220595682282,
            text: "Corpus cardiacum"
          },
          {
            id: 833495275531,
            text: "Corpus luteum"
          },
          {
            id: 732946318300,
            text: "Corpus allatum"
          }
        ],
        subject: "Biology",
        chapter: "Chemical Coordination and Integration",
        text: "A temporary endocrine gland in the human body is:"
      },
      {
        id: 996111903753,
        answer: 115107161644,
        options: [
          {
            id: 411034262356,
            text: "1"
          },
          {
            id: 115107161644,
            text: "2"
          },
          {
            id: 242764700677,
            text: "3"
          },
          {
            id: 572903025009,
            text: "4"
          }
        ],
        subject: "Biology",
        chapter: "Microbes in Human Welfare",
        text: "Select the mismatch:",
        image: "https://i.ibb.co/StTfvhQ/Screenshot-2022-04-05-13-10-03-347-letest-ncertbooks.jpg"
      },
      {
        id: 468743123109,
        answer: 165655466261,
        options: [
          {
            id: 665606303358,
            text: "anterior pituitary gland and stimulates secretion of LH and oxytocin"
          },
          {
            id: 165655466261,
            text: "anterior pituitary gland and stimulates secretion of LH and FSH"
          },
          {
            id: 653029139667,
            text: "posterior pituitary gland and stimulates secretion of oxytocin and FSH."
          },
          {
            id: 965368870269,
            text: "posterior pituitary gland and stimulates secretion of LH and relaxin"
          }
        ],
        subject: "Biology",
        chapter: "Chemical Coordination and Integration",
        text: "GnRH, a hypothalamic hormone, needed in reproduction, acts on:"
      },
      {
        id: 444421799727,
        answer: 421581923387,
        options: [
          {
            id: 421581923387,
            text: "Selectable marker"
          },
          {
            id: 534900588247,
            text: "Vector"
          },
          {
            id: 472272402906,
            text: "plasmid"
          },
          {
            id: 836162815843,
            text: "Structural gene"
          }
        ],
        subject: "Biology",
        chapter: "Biotechnology - Principles and Processes",
        text: "A gene whose expression helps to identify transformed cell is known as:"
      },
      {
        id: 878198712441,
        answer: 740684930015,
        options: [
          {
            id: 586798537626,
            text: "Tropical Savannah"
          },
          {
            id: 740684930015,
            text: "Tropical Rain Forest"
          },
          {
            id: 862732792398,
            text: "Grassland"
          },
          {
            id: 728545197659,
            text: "Temperate Forest"
          }
        ],
        subject: "Biology",
        chapter: "Organisms and Populations",
        text: "Presence of plants arranged into well defined vertical layers depending on their height can be seen best in"
      },
      {
        id: 793978153706,
        answer: 754990539376,
        options: [
          {
            id: 186286177480,
            text: "Ovule"
          },
          {
            id: 936717693955,
            text: "Endosperm"
          },
          {
            id: 754990539376,
            text: "Embryo sac"
          },
          {
            id: 359150112339,
            text: "Embryo"
          }
        ],
        subject: "Biology",
        chapter: "Sexual Reproduction in Flowering Plants",
        text: "Functional megaspore in an angiosperm develops into:"
      },
      {
        id: 494300698790,
        answer: 341663751908,
        options: [
          {
            id: 554452472660,
            text: "During S phase"
          },
          {
            id: 694735316437,
            text: "Withing nucleolus"
          },
          {
            id: 341663751908,
            text: "Prior to fission"
          },
          {
            id: 855562640324,
            text: "Just before transcription"
          }
        ],
        subject: "Biology",
        chapter: "Biological Classification",
        text: "DNA replication in bacteria occurs:"
      },
      {
        id: 523976088373,
        answer: 850288612477,
        options: [
          {
            id: 322374281540,
            text: "Seals, Dolphins, Sharks"
          },
          {
            id: 850288612477,
            text: "Whales, Dolphins, Seals"
          },
          {
            id: 579234939361,
            text: "Dolphins, Seals, Trygon"
          },
          {
            id: 440734769979,
            text: "Trygon, Whales, Seals"
          }
        ],
        subject: "Biology",
        chapter: "Animal Kingdom",
        text: "Which among these is the correct combination of aquatic mammals?"
      },
      {
        id: 289046444828,
        answer: 114939521357,
        options: [
          {
            id: 114939521357,
            text: "Drupe"
          },
          {
            id: 522500180886,
            text: "Berry"
          },
          {
            id: 270996435836,
            text: "Nut"
          },
          {
            id: 629644320135,
            text: "Capsule"
          }
        ],
        subject: "Biology",
        chapter: "Morphology of Flowering Plants",
        text: "Coconut fruit is a"
      },
      {
        id: 624438976174,
        answer: 385095874903,
        options: [
          {
            id: 924651951787,
            text: "Gymnosperms"
          },
          {
            id: 298518432688,
            text: "Algae"
          },
          {
            id: 379842228139,
            text: "Fungi"
          },
          {
            id: 385095874903,
            text: "Angiosperms"
          }
        ],
        subject: "Biology",
        chapter: "Sexual Reproduction in Flowering Plants",
        text: "Double fertilization is exhibited by:"
      },
      {
        id: 841042683344,
        answer: 112201310604,
        options: [
          {
            id: 373513601428,
            text: "Cell Wall"
          },
          {
            id: 814688655035,
            text: "Nuclear Membrane"
          },
          {
            id: 765063728066,
            text: "Plasma Membrane"
          },
          {
            id: 112201310604,
            text: "Glycocalyx"
          }
        ],
        subject: "Biology",
        chapter: "Biological Classification",
        text: "Which of the following components provides sticky character to the bacterial cell?"
      },
      {
        id: 478572848075,
        answer: 545827823144,
        options: [
          {
            id: 497635300738,
            text: "Haplontic, Diplontic"
          },
          {
            id: 911251204350,
            text: "Diplontic, Haplodiplontic"
          },
          {
            id: 545827823144,
            text: "Haplodiplontic, Diplontic"
          },
          {
            id: 682140447470,
            text: "Haplodiplontic, Haplontic"
          }
        ],
        subject: "Biology",
        chapter: "Plant Kingdom",
        text: "Life cycle of Ectocarpus and fucus respectively are:"
      },
      {
        id: 281365433031,
        answer: 177939505535,
        options: [
          {
            id: 177939505535,
            text: "Wildlife Safari Parks"
          },
          {
            id: 419382445620,
            text: "Biodiversity hot spots"
          },
          {
            id: 777674543006,
            text: "Amazon rainforest"
          },
          {
            id: 693872532744,
            text: "Himalayan region"
          }
        ],
        subject: "Biology",
        chapter: "Biodiversity and Conservation",
        text: "Which one of the following is related to ex-situ conservation of threatened animals and plants?"
      },
      {
        id: 111880024367,
        answer: 391516192927,
        options: [
          {
            id: 757445599340,
            text: "(a) and (b)"
          },
          {
            id: 391516192927,
            text: "(a), (c) and (d)"
          },
          {
            id: 241380820459,
            text: "(a) and (c)"
          },
          {
            id: 947627352643,
            text: "(b), (c) and (d)"
          }
        ],
        subject: "Biology",
        chapter: "Neural Control and Coordination",
        text: "Good vision depends on adequate intake of carotene rich food.",
        image: "https://i.ibb.co/4sJ4BQf/Screenshot-2022-04-05-13-31-31-746-letest-ncertbooks.jpg"
      },
      {
        id: 141964127961,
        answer: 377961786934,
        options: [
          {
            id: 861700361546,
            text: "Both are due to a qualitative defect in globin chain synthesis"
          },
          {
            id: 288902270374,
            text: "Both are due to a quantitative defect in globin chain synthesis"
          },
          {
            id: 377961786934,
            text: "Thalassemia is due to less synthesis of globin molecules"
          },
          {
            id: 330071116736,
            text: "Sickle cell anemia is due to a quantitative problem of globin molecules"
          }
        ],
        subject: "Biology",
        chapter: "Principles of Inheritance and Variation",
        text: "Thalassemia and sickle cell anemia are caused due to a problem in globin molecule synthesis. Select the correct statement"
      },
      {
        id: 383351170539,
        answer: 578653853849,
        options: [
          {
            id: 796087801941,
            text: "nucleic acids"
          },
          {
            id: 335043000575,
            text: "proteins"
          },
          {
            id: 594132213710,
            text: "polysaccharides"
          },
          {
            id: 578653853849,
            text: "lipids"
          }
        ],
        subject: "Biology",
        chapter: "Biomolecules",
        text: "Which of the following are not polymeric?"
      },
      {
        id: 478891495836,
        answer: 466301312531,
        options: [
          {
            id: 466301312531,
            text: "Down's Syndrome"
          },
          {
            id: 340898041315,
            text: "Klinefelter's Syndrome"
          },
          {
            id: 291596102022,
            text: "Turner's Syndrome"
          },
          {
            id: 921513372196,
            text: "Sickle Cell Anemia"
          }
        ],
        subject: "Biology",
        chapter: "Principles of Inheritance and Variation",
        text: "A disease caused by an autosomal primary non disjunction is:"
      },
      {
        id: 482746816923,
        answer: 991544325070,
        options: [
          {
            id: 120682566472,
            text: "Light saturation for\n\\(CO_2\\)\nfixation occurs at 10% of full sunlight"
          },
          {
            id: 654595374084,
            text: "Increasing atmospheric \\(CO_2\\) concentration up to 0.05% can enhance \\(CO_2\\) fixation rate"
          },
          {
            id: 991544325070,
            text: "\\(C_3\\) plants respond to higher temperatures with enhanced photosynthesis while \\(C_4\\) plants have much lower temperature optimum"
          },
          {
            id: 521024320480,
            text: "Tomato is a greenhouse crop which can be grown in \\(CO_2\\) enriched atmosphere for higher yield"
          }
        ],
        subject: "Biology",
        chapter: "Photosynthesis in Higher Plants",
        text: "With reference to factors affecting the rate of photosynthesis, which of the following statements is not correct?"
      },
      {
        id: 169677729435,
        answer: 377356548816,
        options: [
          {
            id: 486503579389,
            text: "Cytokinins"
          },
          {
            id: 340935891255,
            text: "Ethylene"
          },
          {
            id: 377356548816,
            text: "Auxins"
          },
          {
            id: 885229438493,
            text: "Gibberellic acid"
          }
        ],
        subject: "Biology",
        chapter: "Plant Growth and Development",
        text: "Fruit and leaf drop at early stages can be prevented by the application of:"
      },
      {
        id: 629818756837,
        answer: 163311062139,
        options: [
          {
            id: 163311062139,
            text: "Core zone"
          },
          {
            id: 926017692888,
            text: "Buffer zone"
          },
          {
            id: 598594488122,
            text: "Transition zone"
          },
          {
            id: 687967655101,
            text: "Restoration zone"
          }
        ],
        subject: "Biology",
        chapter: "Biodiversity and Conservation",
        text: "The region of biosphere reserve which is legally protected and where no human activity is allowed is known as:"
      },
      {
        id: 833916462258,
        answer: 335877806017,
        options: [
          {
            id: 588493640314,
            text: "ostia"
          },
          {
            id: 815062222083,
            text: "oscula"
          },
          {
            id: 335877806017,
            text: "choanocytes"
          },
          {
            id: 694533958120,
            text: "mesenchymal cells"
          }
        ],
        subject: "Biology",
        chapter: "Animal Kingdom",
        text: "In case of poriferans, the spongocoel is lined with flagellated cells called:"
      },
      {
        id: 447945297417,
        answer: 850909670709,
        options: [
          {
            id: 482587405921,
            text: "Renin"
          },
          {
            id: 850909670709,
            text: "Atrial natriuretic Factor"
          },
          {
            id: 380451448752,
            text: "Aldosterone"
          },
          {
            id: 181955277456,
            text: "ADH"
          }
        ],
        subject: "Biology",
        chapter: "Excretory Products and their Elimination",
        text: "A decrease in blood pressure / volume will not cause the release of:"
      },
      {
        id: 709192609500,
        answer: 972352303662,
        options: [
          {
            id: 382087508677,
            text: "autogamy and xenogamy"
          },
          {
            id: 972352303662,
            text: "autogamy and geitonogamy"
          },
          {
            id: 237410056935,
            text: "geitonogamy and xenogamy"
          },
          {
            id: 225326751224,
            text: "cliestogamy and xenogamy"
          }
        ],
        subject: "Biology",
        chapter: "Sexual Reproduction in Flowering Plants",
        text: "A dioecious flowering plant prevents both:"
      },
      {
        id: 876576416662,
        answer: 681271404216,
        options: [
          {
            id: 966043069889,
            text: "Contraction of outer wall of guard cells"
          },
          {
            id: 522313502199,
            text: "Decrease in turgidity of guard cells"
          },
          {
            id: 681271404216,
            text: "Radial orientation of cellulose microfibrils in the cell wall of guard cells"
          },
          {
            id: 702371622950,
            text: "Longitudinal orientation of cellulose microfibrils in the cell wall of guard cells"
          }
        ],
        subject: "Biology",
        chapter: "Transport in Plants",
        text: "Which of the following facilitates opening of stomatal aperture?"
      },
      {
        id: 983454776615,
        answer: 698788313638,
        options: [
          {
            id: 982165836930,
            text: "Bromophenol blue"
          },
          {
            id: 286390789387,
            text: "Acetocarmine"
          },
          {
            id: 122304583678,
            text: "Aniline blue"
          },
          {
            id: 698788313638,
            text: "Ethidium bromide"
          }
        ],
        subject: "Biology",
        chapter: "Biotechnology - Principles and Processes",
        text: "The DNA fragments seperated on an agarose gel can be visualised after staining with"
      },
      {
        id: 812749633896,
        answer: 923170535225,
        options: [
          {
            id: 966103170874,
            text: "There are three points in the cycle where \\(NAD^+\\) is reduced to \\(NADH+H^+\\)"
          },
          {
            id: 470586377767,
            text: "There is one point in the cycle where \\(FAD^+\\) is reduced to \\(FADH_2\\)"
          },
          {
            id: 669188919175,
            text: "During conversion of succinyl CoA to succinic acid, a molecule of GTP is synthesised"
          },
          {
            id: 923170535225,
            text: "The cycle starts with condensation of acetyl group (acetyl CoA) with pyruvic acid to yield citric acid"
          }
        ],
        subject: "Biology",
        chapter: "Respiration in Plants",
        text: "Which statement is wrong for Kreb's cycle?"
      },
      {
        id: 345589735790,
        answer: 699569452248,
        options: [
          {
            id: 255959730731,
            text: "Fungistasis"
          },
          {
            id: 258132506671,
            text: "Amensalism"
          },
          {
            id: 831471208781,
            text: "Antibiosis"
          },
          {
            id: 699569452248,
            text: "Mutualism"
          }
        ],
        subject: "Biology",
        chapter: "Organisms and Populations",
        text: "Mycorrhizae are the example of"
      },
      {
        id: 957612926721,
        answer: 746578677068,
        options: [
          {
            id: 646161962503,
            text: "Fibrous joint"
          },
          {
            id: 315353047930,
            text: "Cartilaginous joint"
          },
          {
            id: 746578677068,
            text: "Synovial joint"
          },
          {
            id: 618562851963,
            text: "Saddle joint"
          }
        ],
        subject: "Biology",
        chapter: "Locomotion and Movement",
        text: "The pivot joining between atlas and axis is a type of"
      },
      {
        id: 574452332532,
        answer: 553972042482,
        options: [
          {
            id: 525008688740,
            text: "Acetoacter aceti : Antibiotics"
          },
          {
            id: 867933641248,
            text: "Methanobacterium : Lactic acid"
          },
          {
            id: 345298303743,
            text: "Penicillium notatum : Acetic acid"
          },
          {
            id: 553972042482,
            text: "Sacchromyces cerevsiae : Ethanol"
          }
        ],
        subject: "Biology",
        chapter: "Microbes in Human Welfare",
        text: "Which of the following is correctly matched for the product produced by them?"
      },
      {
        id: 427224370009,
        answer: 673516701578,
        options: [
          {
            id: 231679954736,
            text: "only (c)"
          },
          {
            id: 477039063662,
            text: "only (d)"
          },
          {
            id: 838235933959,
            text: "(a) and (b)"
          },
          {
            id: 673516701578,
            text: "(c) and (d)"
          }
        ],
        subject: "Biology",
        chapter: "Structural Organisation in Animals",
        text: "Frog's heart when taken out of the body continues to beat for sometime. Select the best option from the following statements",
        image: "https://i.ibb.co/4Sb01MJ/Screenshot-2022-04-05-14-03-12-626-letest-ncertbooks.jpg"
      },
      {
        id: 481569335997,
        answer: 885644783618,
        options: [
          {
            id: 885644783618,
            text: "Schwann cell and Oligodendrocytes"
          },
          {
            id: 997691957984,
            text: "Astrocytes and Schwann cells"
          },
          {
            id: 955476706443,
            text: "Oligodendrocytes and Osteoclasts"
          },
          {
            id: 452594014004,
            text: "Osteoclasts and Astrocytes"
          }
        ],
        subject: "Biology",
        chapter: "Neural Control and Coordination",
        text: "Myelin sheath is produced by"
      },
      {
        id: 428031664989,
        answer: 876204439911,
        options: [
          {
            id: 297030159415,
            text: "Rete testis"
          },
          {
            id: 416877681186,
            text: "Epididymis"
          },
          {
            id: 300834944254,
            text: "Vas deferens"
          },
          {
            id: 876204439911,
            text: "Female reproductive tract"
          }
        ],
        subject: "Biology",
        chapter: "Human Reproduction",
        text: "Capacitation occurs in"
      },
      {
        id: 882184256679,
        answer: 148868415739,
        options: [
          {
            id: 218282158729,
            text: "Perisperm"
          },
          {
            id: 583922751235,
            text: "Cotyledon"
          },
          {
            id: 148868415739,
            text: "Endosperm"
          },
          {
            id: 464322292940,
            text: "Pericarp"
          }
        ],
        subject: "Biology",
        chapter: "Morphology of Flowering Plants",
        text: "The morphological nature of the edible part of coconut is"
      },
      {
        id: 873619610849,
        answer: 856718326457,
        options: [
          {
            id: 241440873730,
            text: "Xylem parenchyma"
          },
          {
            id: 989550225682,
            text: "Collenchyma"
          },
          {
            id: 856718326457,
            text: "Phellem"
          },
          {
            id: 487959997705,
            text: "Phloem"
          }
        ],
        subject: "Biology",
        chapter: "Anatomy of Flowering Plants",
        text: "Which of the following is made up of dead cells"
      },
      {
        id: 859931867674,
        answer: 193305800676,
        options: [
          {
            id: 362324330169,
            text: "Intrauterine transfer"
          },
          {
            id: 354465876076,
            text: "Gamete intracytoplasmic fallopian transfer"
          },
          {
            id: 193305800676,
            text: "Aritficial insemination"
          },
          {
            id: 664758628830,
            text: "Intracytoplasmic sperm injection"
          }
        ],
        subject: "Biology",
        chapter: "Reproductive Health",
        text: "In case of a couple where the male is having a very low sperm count, which technique will be suitable for fertilisation"
      },
      {
        id: 908829405460,
        answer: 638060235116,
        options: [
          {
            id: 638060235116,
            text: "r-RNA"
          },
          {
            id: 312337880175,
            text: "t-RNA"
          },
          {
            id: 362432473068,
            text: "m-RNA"
          },
          {
            id: 871265949061,
            text: "mi-RNA"
          }
        ],
        subject: "Biology",
        chapter: "Molecular Basis of Inheritance",
        text: "Which of the following RNAs should be the most abundant in animal cell"
      },
      {
        id: 351162095738,
        answer: 311360453928,
        options: [
          {
            id: 393745385431,
            text: "Phelloderm"
          },
          {
            id: 412710265483,
            text: "Primary phloem"
          },
          {
            id: 311360453928,
            text: "Secondary xylem"
          },
          {
            id: 200434937905,
            text: "Periderm"
          }
        ],
        subject: "Biology",
        chapter: "Anatomy of Flowering Plants",
        text: "The vascular cambium normally gives rise to"
      },
      {
        id: 122741461947,
        answer: 949208259481,
        options: [
          {
            id: 949208259481,
            text: "Condensation \u2192 nuclear membrane disassembly \u2192 arrangement at equator \u2192 centromere division \u2192 segregation \u2192 telophase"
          },
          {
            id: 922486452364,
            text: "Condensation \u2192 crossing over \u2192 nuclear membrane disassembly \u2192 segregation \u2192 telophase"
          },
          {
            id: 223569531341,
            text: "Condensation \u2192 nuclear membrane disassembly \u2192 crossing over \u2192 segregation \u2192 telophase"
          },
          {
            id: 931574544632,
            text: "Condensation \u2192 arrangement at equator \u2192 centromere division \u2192 segregation \u2192 telophase"
          }
        ],
        subject: "Biology",
        chapter: "Cell Cycle and Cell Division",
        text: "Which of the following options gives the correct sequences of events during mitosis?"
      },
      {
        id: 710768156512,
        answer: 954308095967,
        options: [
          {
            id: 328350579480,
            text: "amylase, peptidase, trypsinogen, rennin"
          },
          {
            id: 917068638202,
            text: "amylase, pepsin, trypsinogen, maltase"
          },
          {
            id: 596316615650,
            text: "petidase, amylase, pepsin, rennin"
          },
          {
            id: 954308095967,
            text: "lipase, amylase, trypsinogen, procarboxypeptidase"
          }
        ],
        subject: "Biology",
        chapter: "Digestion and Absorption",
        text: "Which of the following option best represents the enzyme composition of pancreatic juice?"
      },
      {
        id: 447200941636,
        answer: 868604561389,
        options: [
          {
            id: 804227665729,
            text: "Anemophily"
          },
          {
            id: 868604561389,
            text: "Entomophily"
          },
          {
            id: 895579021732,
            text: "Hydrophily"
          },
          {
            id: 172142928622,
            text: "Cleistogamy"
          }
        ],
        subject: "Biology",
        chapter: "Sexual Reproduction in Flowering Plants",
        text: "Attractants and rewards are required for:"
      },
      {
        id: 538425955014,
        answer: 291570669897,
        options: [
          {
            id: 823798794955,
            text: "Cells"
          },
          {
            id: 961300496213,
            text: "Potential gradients"
          },
          {
            id: 291570669897,
            text: "A condition of no current flow through the galvanometer"
          },
          {
            id: 431273156524,
            text: "A combination of cells, galvanometer and resistances"
          }
        ],
        subject: "Physics",
        chapter: "Current Electricity",
        text: "A potentiometer is an accurate and versatile device to make electrical measurements of E.M.F. because the method involves:"
      },
      {
        id: 458941037144,
        answer: 213087290982,
        options: [
          {
            id: 682670135439,
            text: "4RT"
          },
          {
            id: 464317060222,
            text: "15RT"
          },
          {
            id: 737485279959,
            text: "9RT"
          },
          {
            id: 213087290982,
            text: "11RT"
          }
        ],
        subject: "Physics",
        chapter: "Kinetic Theory",
        text: "A gas mixture consists of 2 moles of \\(O_2\\) and 4 moles of Ar at temperature \\(T\\). Neglecting all vibrational modes, the total internal energy of the system is"
      },
      {
        id: 702603758150,
        answer: 409104899176,
        options: [
          {
            id: 214696021194,
            text: "\\(1\\over\\lambda\\)"
          },
          {
            id: 409104899176,
            text: "\\(1\\over{7\\lambda}\\)"
          },
          {
            id: 217034597454,
            text: "\\(1\\over{8\\lambda}\\)"
          },
          {
            id: 621708845761,
            text: "\\(1\\over{9\\lambda}\\)"
          }
        ],
        subject: "Physics",
        chapter: "Nuclei",
        text: "Radioactive material 'A' has decay constant '\\(8\\lambda\\)' and material 'B' has decay constant '\\(\\lambda\\)'. Initially they have same number of nuclei. After what time, the ratio of number of nuclei of material 'B' to that of 'A' will be \\(1 \\over e\\)?"
      },
      {
        id: 451727489079,
        answer: 810371405597,
        options: [
          {
            id: 450606063122,
            text: "\\(650 kg m^-3\\)"
          },
          {
            id: 824357798584,
            text: "\\(425 kg m^-3\\)"
          },
          {
            id: 441963710850,
            text: "\\(800 kg m^-3\\)"
          },
          {
            id: 810371405597,
            text: "\\(928 kg m^-3\\)"
          }
        ],
        subject: "Physics",
        chapter: "Mechanical Properties of Fluids",
        text: "A U tube with both ends open to the atmosphere, is partially filled with water. Oil, which is immiscible with water, is poured into one side until it stands at a distance of 10mm above the water level on the other side. Meanwhile the water rises by 65mm from its original level. The density of the oil is",
        image: "https://i.ibb.co/6XJJkqc/Screenshot-2022-04-05-18-08-04-569-letest-ncertbooks.jpg"
      },
      {
        id: 139129719054,
        answer: 472350826164,
        options: [
          {
            id: 472350826164,
            text: "\\(9.1 \\mu J\\)"
          },
          {
            id: 583346646193,
            text: "\\(4.55 \\mu J\\)"
          },
          {
            id: 274893097323,
            text: "\\(2.3 \\mu J\\)"
          },
          {
            id: 384453620458,
            text: "\\(1.15 \\mu J\\)"
          }
        ],
        subject: "Physics",
        chapter: "Moving Charges and Magnetism",
        text: "A 250-Turn rectangular coil of length 2.1cm and width 1.25cm carries a current of \\(85 \\mu A\\) and subjected to a magnetic field of strength 0.85T. Work done for rotating the coil by \\(180 \\degree\\) against the torque is"
      },
      {
        id: 883532049883,
        answer: 682391786142,
        options: [
          {
            id: 367365072198,
            text: "\\(h\\over{\\sqrt{mkT}}\\)"
          },
          {
            id: 682391786142,
            text: "\\(h\\over{\\sqrt{3mkT}}\\)"
          },
          {
            id: 961844408537,
            text: "\\(2h\\over{\\sqrt{3mkT}}\\)"
          },
          {
            id: 260864036142,
            text: "\\(2h\\over{\\sqrt{mkT}}\\)"
          }
        ],
        subject: "Physics",
        chapter: "Dual Nature of Radiation and Matter",
        text: "The de-Broglie wavelength of a neutron in thermal equilibrium with heavy water at a temperature T (Kelvin) and mass m, is"
      },
      {
        id: 112368037085,
        answer: 705329904887,
        options: [
          {
            id: 705329904887,
            text: "\\(T\\)"
          },
          {
            id: 150420193220,
            text: "\\(T + \\frac{mv^2}{l}\\)"
          },
          {
            id: 718194573890,
            text: "\\(T - \\frac{mv^2}{l}\\)"
          },
          {
            id: 865262713728,
            text: "Zero"
          }
        ],
        subject: "Physics",
        chapter: "Laws of Motion",
        text: "One end of string of length l is connected to a particle of mass 'm' and the other end is connected to a small peg on a smooth horizontal table. If the particle moves in circle with speed 'v', the net force on the particle (directed towards center) will be (T represents the tension in the string)"
      },
      {
        id: 625464857510,
        answer: 272513406674,
        options: [
          {
            id: 752963012464,
            text: "2 mA"
          },
          {
            id: 967294462816,
            text: "0.2 A"
          },
          {
            id: 272513406674,
            text: "2 A"
          },
          {
            id: 857635969723,
            text: "0 A"
          }
        ],
        subject: "Physics",
        chapter: "Electromagnetic Induction",
        text: "Figure shows a circuit contains three identical resistors with resistance \\(R = 9.0 \\Omega \\) each, two identical inductors with inductance L = 2.0 mH each, and an ideal battery with emf \\(\\epsilon = 18 V \\). The current 'I' through the battery just after the switch closed is",
        image: "https://i.ibb.co/j6c0Fg8/Screenshot-2022-04-05-18-27-11-914-letest-ncertbooks.jpg"
      },
      {
        id: 309515084406,
        answer: 733209217740,
        options: [
          {
            id: 944398436445,
            text: "0"
          },
          {
            id: 920314082910,
            text: "\\(5 m/s^2\\)"
          },
          {
            id: 733209217740,
            text: "\\(-4 m/s^2\\)"
          },
          {
            id: 717709512026,
            text: "\\(-8 m/s^2\\)"
          }
        ],
        subject: "Physics",
        chapter: "Motion in a Plane",
        text: "The x and y coordinates of the particle at any time are \\(x = 5t - 2t^2 \\) and \\(y = 10t\\) respectively, where x and y are in meters and t in seconds. The acceleration of the particle at t = 2s is"
      },
      {
        id: 748019397004,
        answer: 246698165222,
        options: [
          {
            id: 405392701843,
            text: "$$10^{-20} C$$"
          },
          {
            id: 397174221186,
            text: "$$10^{-23} C$$"
          },
          {
            id: 246698165222,
            text: "$$10^{-37} C$$"
          },
          {
            id: 200040321590,
            text: "$$10^{-47} C$$"
          }
        ],
        subject: "Physics",
        chapter: "Electric Charges and Fields",
        text: "Suppose the charge of a proton and an electron differ slightly. One of the is -e, the other is (e + \\(\\Delta e\\)). If the net of electrostatic force and gravitational force between two hydrogen atoms placed at distance d (much greater than the atomic size) apart is zero, then \\(\\Delta e\\) is of the order of [Given mass of hydrogen \\(m_h = 1.67 \\times 10^{-27} kg\\)]"
      },
      {
        id: 506841465052,
        answer: 972444583696,
        options: [
          {
            id: 972444583696,
            text: "$$\\frac{K_1 + K_2}{2}$$"
          },
          {
            id: 660123978982,
            text: "$$\\frac{3(K_1 + K_2)}{2}$$"
          },
          {
            id: 861711177154,
            text: "$$K_1+K_2$$"
          },
          {
            id: 913192947507,
            text: "$$2(K_1 + K_2)$$"
          }
        ],
        subject: "Physics",
        chapter: "Thermal Properties of Matter",
        text: "Two rods A and B of different materials are welded together as shown in figure. Their thermoal conductivities are \\(K_1\\) and \\(K_2\\). The thermal conductivity of the composite rod will be",
        image: "https://i.ibb.co/vV9FhMb/Screenshot-2022-04-05-18-43-57-482-letest-ncertbooks.jpg"
      },
      {
        id: 976203157654,
        answer: 608882476617,
        options: [
          {
            id: 630504680547,
            text: "Maximum work is required to move q in figure (c)"
          },
          {
            id: 608882476617,
            text: "In all the four cases the work done is the same"
          },
          {
            id: 750356265334,
            text: "Minimum work is required to move q in figure (a)"
          },
          {
            id: 197237072290,
            text: "Maximum work is required to move q in figure (b)"
          }
        ],
        subject: "Physics",
        chapter: "Electrostatic Potential and Capacitance",
        text: "The diagrams show regions of equipotentials. A positive charge is moved from A to B in each diagram",
        image: "https://i.ibb.co/642LtB8/Screenshot-2022-04-05-20-51-29-788-letest-ncertbooks.jpg"
      },
      {
        id: 133724621561,
        answer: 552724925727,
        options: [
          {
            id: 949110885512,
            text: "2"
          },
          {
            id: 406900005027,
            text: "1"
          },
          {
            id: 552724925727,
            text: "4"
          },
          {
            id: 803744281672,
            text: "0.5"
          }
        ],
        subject: "Physics",
        chapter: "Atoms",
        text: "The ratio of wavelengths of the last line of Balmer series and the last line of Lyman series is"
      },
      {
        id: 630430300853,
        answer: 546612333116,
        options: [
          {
            id: 461406491844,
            text: "1.25"
          },
          {
            id: 592638742893,
            text: "1.59"
          },
          {
            id: 398341008262,
            text: "1.69"
          },
          {
            id: 546612333116,
            text: "1.78"
          }
        ],
        subject: "Physics",
        chapter: "Wave Optics",
        text: "Young's double slit experiment is first performed in air and then in a medium other than air. It is found that 8th bright fringe in the medium lies where 5th dark fringe lies in air. The refractive index of the medium is nearly"
      },
      {
        id: 612316066742,
        answer: 371732741147,
        options: [
          {
            id: 564751230027,
            text: "$$\\frac{\\sqrt{5}}{\\pi}$$"
          },
          {
            id: 545314548175,
            text: "$$\\frac{\\sqrt{5}}{2\\pi}$$"
          },
          {
            id: 371732741147,
            text: "$$\\frac{4\\pi}{\\sqrt{5}}$$"
          },
          {
            id: 142104589608,
            text: "$$\\frac{2\\pi}{\\sqrt{3}}$$"
          }
        ],
        subject: "Physics",
        chapter: "Ocillations",
        text: "A particle executes linear simple harmonic motion with an amplitude of 3cm. When the particle is at 2cm from the mean position, the magnitude of its velocity is equal to that of its acceleration. Then its time period in seconds is"
      },
      {
        id: 609010708908,
        answer: 536491087253,
        options: [
          {
            id: 223741322990,
            text: "P -> a, Q -> c, R -> d, S -> b"
          },
          {
            id: 536491087253,
            text: "P -> c, Q -> a, R -> d, S -> b"
          },
          {
            id: 494406302686,
            text: "P -> c, Q -> d, R -> b, S -> a"
          },
          {
            id: 370428815869,
            text: "P -> d, Q -> b, R -> a, S -> c"
          }
        ],
        subject: "Physics",
        chapter: "Thermodynamics",
        text: "Thermodynamic processes are indicated in the following diagram.",
        image: "https://i.ibb.co/pxN573c/Screenshot-2022-04-05-21-00-54-187-letest-ncertbooks.jpg"
      },
      {
        id: 579095378731,
        answer: 320119162706,
        options: [
          {
            id: 897176792755,
            text: "Increases by a factor of 4"
          },
          {
            id: 320119162706,
            text: "Decreases by a factor of 2"
          },
          {
            id: 955635424384,
            text: "Remains the same"
          },
          {
            id: 940018847374,
            text: "Increases by a factor of 2"
          }
        ],
        subject: "Physics",
        chapter: "Electrostatic Potential and Capacitance",
        text: "A capacitor is charged by a battery. The battery is removed and another identical uncharged capacitor is connected in parallel. The total electrostatic energy of the resulting system"
      },
      {
        id: 496675219614,
        answer: 551991452395,
        options: [
          {
            id: 684786126384,
            text: "$$\\approx 6 \\times 10^5 ms^{-1}$$"
          },
          {
            id: 551991452395,
            text: "$$\\approx 0.6 \\times 10^6 ms^{-1}$$"
          },
          {
            id: 654139096575,
            text: "$$\\approx 61 \\times 10^3 ms^{-1}$$"
          },
          {
            id: 917968602608,
            text: "$$\\approx 0.3 \\times 10^6 ms^{-1}$$"
          }
        ],
        subject: "Physics",
        chapter: "Dual Nature of Radiation and Matter",
        text: "The photoelectric threshold wavelength of silver is \\(3250 \\times 10^{-10}m\\). The velocity of the electron ejected from a silver surface by ultraviolet light of wavelength \\(2536 \\times 10^{-10}m\\) is (Given \\(h = 4.14 \\times 10^{-15}eVs\\) and \\(c = 3 \\times 10^{8}ms^{-1}\\))"
      },
      {
        id: 822992338828,
        answer: 758644657115,
        options: [
          {
            id: 758644657115,
            text: "$$\\frac{1}{c^2}\\left[\\frac{Ge^2}{4\\pi \\epsilon_{0}}\\right]^{1/2}$$"
          },
          {
            id: 946178104678,
            text: "$$c^2\\left[\\frac{Ge^2}{4\\pi \\epsilon_{0}}\\right]^{1/2}$$"
          },
          {
            id: 940667352669,
            text: "$$\\frac{1}{c^2}\\left[\\frac{e^2}{G4\\pi \\epsilon_{0}}\\right]^{1/2}$$"
          },
          {
            id: 234647345962,
            text: "$$\\frac{1}{c}\\frac{Ge^2}{4\\pi \\epsilon_{0}}$$"
          }
        ],
        subject: "Physics",
        chapter: "Units and Measurements",
        text: "A physical quantity of the dimensions of length that can be formed out of c, G and \\(e^2\\over4\\pi \\epsilon_{0}\\) is [c is velocity of light, G is universal constant of gravitation and e is charge]"
      },
      {
        id: 470010644796,
        answer: 537003399609,
        options: [
          {
            id: 703658417023,
            text: "350 Hz"
          },
          {
            id: 671932767827,
            text: "361 Hz"
          },
          {
            id: 301851161755,
            text: "411 Hz"
          },
          {
            id: 537003399609,
            text: "448 Hz"
          }
        ],
        subject: "Physics",
        chapter: "Waves",
        text: "Two cars moving in opposite directions approach each other with speed of 22 m/s and 16.5 m/s respectively. The driver of the first car blows a horn having a frequency 400 Hz. The frequency heard by the driver of the second car is [velocity of sound 340 m/s]"
      },
      {
        id: 771606283029,
        answer: 784328964722,
        options: [
          {
            id: 269391870422,
            text: "200 and 1000"
          },
          {
            id: 727259301880,
            text: "15 and 200"
          },
          {
            id: 784328964722,
            text: "150 and 15000"
          },
          {
            id: 319020959851,
            text: "20 and 2000"
          }
        ],
        subject: "Physics",
        chapter: "Semiconductor Electronics Materials, Devices and Simple Circuits",
        text: "In a common emitter transistor amplifier the audio signal voltage across the collector is 3V. The resistance of collector is \\(3k\\Omega\\). If the current gain is 100 and the base resistance is \\(2k\\Omega\\), the voltage and power gain of the amplifier is"
      },
      {
        id: 837444617354,
        answer: 118711145445,
        options: [
          {
            id: 118711145445,
            image: "https://i.ibb.co/ySFPQTP/option1.jpg"
          },
          {
            id: 268999503391,
            image: "https://i.ibb.co/p4xhKBL/option2.jpg"
          },
          {
            id: 846338271040,
            image: "https://i.ibb.co/3vP5pCN/option3.jpg"
          },
          {
            id: 104262126278,
            image: "https://i.ibb.co/GncBFCF/option4.jpg"
          }
        ],
        subject: "Physics",
        chapter: "Semiconductor Electronics Materials, Devices and Simple Circuits",
        text: "Which of the following represents forward bias diode?"
      },
      {
        id: 339624321975,
        answer: 138488576649,
        options: [
          {
            id: 225378138491,
            text: "1:6"
          },
          {
            id: 663410805326,
            text: "1:9"
          },
          {
            id: 138488576649,
            text: "1:11"
          },
          {
            id: 780840179506,
            text: "1:14"
          }
        ],
        subject: "Physics",
        chapter: "Laws of Motion",
        text: "A spring of force constant k is cut into lengths of ratio 1:2:3. They are connected in series and the new force constant is \\(k'\\). Then they are connected in parallel and force constant is \\(k''\\). Then \\(k':k''\\) is"
      },
      {
        id: 849719744870,
        answer: 856964717930,
        options: [
          {
            id: 110859247824,
            text: "AND gate"
          },
          {
            id: 432909678204,
            text: "OR gate"
          },
          {
            id: 856964717930,
            text: "NOR gate"
          },
          {
            id: 542775304083,
            text: "NOT gate"
          }
        ],
        subject: "Physics",
        chapter: "Semiconductor Electronics Materials, Devices and Simple Circuits",
        text: "The given electrical network is equivalent to",
        image: "https://i.ibb.co/M7nz97z/Screenshot-2022-04-06-00-45-01-175-letest-ncertbooks.jpg"
      },
      {
        id: 989864207601,
        answer: 342925859896,
        options: [
          {
            id: 304497684884,
            text: "$$d=\\frac{1}{2}km$$"
          },
          {
            id: 506475109076,
            text: "$$d=1km$$"
          },
          {
            id: 245237259976,
            text: "$$d=\\frac{3}{2}km$$"
          },
          {
            id: 342925859896,
            text: "$$d=2km$$"
          }
        ],
        subject: "Physics",
        chapter: "Gravitation",
        text: "The acceleration due to gravity at a height 1km above the earth is the same as at a depth d below the surface of earth. Then"
      },
      {
        id: 946285278493,
        answer: 542360937063,
        options: [
          {
            id: 542360937063,
            text: "(b) and (d)"
          },
          {
            id: 771043016697,
            text: "(a) and (b)"
          },
          {
            id: 943533618229,
            text: "(b) and (c)"
          },
          {
            id: 653135850293,
            text: "(c) and (d)"
          }
        ],
        subject: "Physics",
        chapter: "System of Particles and Rotational Motion",
        text: "Which of the following statements are correct?",
        image: "https://i.ibb.co/Sm4Qbqh/Screenshot-2022-04-06-00-50-25-327-letest-ncertbooks.jpg"
      },
      {
        id: 306991803742,
        answer: 482096311160,
        options: [
          {
            id: 897762039216,
            text: "1J"
          },
          {
            id: 482096311160,
            text: "90J"
          },
          {
            id: 480693315829,
            text: "99J"
          },
          {
            id: 228876081423,
            text: "100J"
          }
        ],
        subject: "Physics",
        chapter: "Thermodynamics",
        text: "A carnot engine having an efficiency of \\(1\\over 10\\) as heat engine, is used as a refrigerator. If the work done on the system is 10J, the amount of energy absorbed from the reservoir at lower temperature is"
      },
      {
        id: 191485402124,
        answer: 299811479407,
        options: [
          {
            id: 299811479407,
            text: "$$cot^2\\theta = cot^2\\theta_1 + cot^2\\theta_2$$"
          },
          {
            id: 792959255293,
            text: "$$tan^2\\theta = tan^2\\theta_1 + tan^2\\theta_2$$"
          },
          {
            id: 247809440919,
            text: "$$cot^2\\theta = cot^2\\theta_1 - cot^2\\theta_2$$"
          },
          {
            id: 945034898524,
            text: "$$tan^2\\theta = tan^2\\theta_1 - tan^2\\theta_2$$"
          }
        ],
        subject: "Physics",
        chapter: "Magnetism and Matter",
        text: "If \\(\\theta_1\\) and \\(\\theta_2\\) be the apparent angles of dip observed in two vertical planes at right angles to each other, then the true angle of dip \\(\\theta\\) is given by"
      },
      {
        id: 950590660255,
        answer: 871972344003,
        options: [
          {
            id: 898086468325,
            text: "$$\\frac{\\mu_0I^2}{2\\pi d}$$"
          },
          {
            id: 674084927733,
            text: "$$\\frac{2\\mu_0I^2}{\\pi d}$$"
          },
          {
            id: 751276609364,
            text: "$$\\frac{\\sqrt{2}\\mu_0I^2}{\\pi d}$$"
          },
          {
            id: 871972344003,
            text: "$$\\frac{\\mu_0I^2}{\\sqrt{2}\\pi d}$$"
          }
        ],
        subject: "Physics",
        chapter: "Moving Charges and Magnetism",
        text: "An arrangement of three parallel straight wires placed perpendicular to plane of paper carrying same current 'I' along the same direction is shown in Fig. Magnitude of force per unit length on the middle wire 'B' is given by",
        image: "https://i.ibb.co/0X28z9G/Screenshot-2022-04-10-15-36-14-710-letest-ncertbooks.jpg"
      },
      {
        id: 405148545178,
        answer: 963020298722,
        options: [
          {
            id: 699343305874,
            text: "Keep floating at the same distance between them"
          },
          {
            id: 963020298722,
            text: "Move towards each other"
          },
          {
            id: 882449537542,
            text: "Move away from each other"
          },
          {
            id: 204244290698,
            text: "Will become stationary"
          }
        ],
        subject: "Physics",
        chapter: "Gravitation",
        text: "Two astronauts are floating in gravitational free space after having lost contact  with their spaceship. The two will:"
      },
      {
        id: 392442824378,
        answer: 151085438465,
        options: [
          {
            id: 621733949681,
            text: "\\(1.41 \\times 10^{-8} T\\)"
          },
          {
            id: 151085438465,
            text: "\\(2.83 \\times 10^{-8} T\\)"
          },
          {
            id: 794692496735,
            text: "\\(0.70 \\times 10^{-8} T\\)"
          },
          {
            id: 303789622067,
            text: "\\(4.23 \\times 10^{-8} T\\)"
          }
        ],
        subject: "Physics",
        chapter: "Electromagnetic Waves",
        text: "In an electromagnetic wave in free space the root mean square value of the electric field is \\(E_{rms} = 6 V/m\\). The peak value of the magnetic field is"
      },
      {
        id: 476650688533,
        answer: 799111070714,
        options: [
          {
            id: 798570144913,
            text: "\\(\\frac{p}{B}\\)"
          },
          {
            id: 778904151579,
            text: "\\(\\frac{B}{3p}\\)"
          },
          {
            id: 495272793899,
            text: "\\(\\frac{3p}{B}\\)"
          },
          {
            id: 799111070714,
            text: "\\(\\frac{p}{3B}\\)"
          }
        ],
        subject: "Physics",
        chapter: "Mechanical Properties of Solids",
        text: "The bulk modulus of a spherical object is 'B'. If it is subjected to uniform pressure 'p', the fractional decrease in radius is"
      },
      {
        id: 231198025671,
        answer: 334584053542,
        options: [
          {
            id: 564273553791,
            text: "8 : 27"
          },
          {
            id: 783409702679,
            text: "9 : 4"
          },
          {
            id: 334584053542,
            text: "3 : 2"
          },
          {
            id: 426937553157,
            text: "16 : 81"
          }
        ],
        subject: "Physics",
        chapter: "Ray Optics and Optical Instruments",
        text: "The ratio of resolving powers of an optical microscope for two wavelengths \\(\\lambda_1 = 4000 \\dot{A} \\) and \\(\\lambda_2 = 6000 \\dot{A} \\) is"
      },
      {
        id: 288762707302,
        answer: 574634106238,
        options: [
          {
            id: 683311995789,
            text: "(i) -10 J (ii) -8.25 J"
          },
          {
            id: 343012296539,
            text: "(i) 1.25 J (ii) -8.25 J"
          },
          {
            id: 328828867569,
            text: "(i) 100 J (ii) 8.75 J"
          },
          {
            id: 574634106238,
            text: "(i) 10 J (ii) -8.75 J"
          }
        ],
        subject: "Physics",
        chapter: "Work, Energy and Power",
        text: "Consider a drop of rain water having mass 1g falling from a height of 1km. It hits the ground with a speed of 50m/s. Take g constant with a value of \\(10m/s^2\\). The work done bye the (i) gravitational force and the (ii) resistive force of air is"
      },
      {
        id: 234293824042,
        answer: 982128929035,
        options: [
          {
            id: 285372671036,
            text: "225"
          },
          {
            id: 564861103087,
            text: "450"
          },
          {
            id: 962694364273,
            text: "1000"
          },
          {
            id: 982128929035,
            text: "1800"
          }
        ],
        subject: "Physics",
        chapter: "Thermal Properties of Matter",
        text: "A spherical black body with a radius of 12 cm radiates 450 watt power at 500 K. If the radius were halved and the temperature doubled, the power radiated in watt would be"
      },
      {
        id: 218520614322,
        answer: 364603639767,
        options: [
          {
            id: 775501799810,
            text: "\\(g, \\frac{g}{3}\\)"
          },
          {
            id: 364603639767,
            text: "\\(\\frac{g}{3}, g\\)"
          },
          {
            id: 744402350372,
            text: "\\(g, g\\)"
          },
          {
            id: 518687854939,
            text: "\\(\\frac{g}{3}, \\frac{g}{3}\\)"
          }
        ],
        subject: "Physics",
        chapter: "Laws of Motion",
        text: "Two blocks A and B of masses 3m and m respectively are connected by a massless and inextensible string. The whole system is suspended by a massless spring as shown in the figure. The magnitudes of acceleration of A and B immediately after the string is cut, are respectively"
      },
      {
        id: 503825395066,
        answer: 884003618861,
        options: [
          {
            id: 416759985055,
            text: "\\(\\frac{I_0}{2}\\)"
          },
          {
            id: 861966618694,
            text: "\\(\\frac{I_0}{4}\\)"
          },
          {
            id: 884003618861,
            text: "\\(\\frac{I_0}{8}\\)"
          },
          {
            id: 834158463164,
            text: "\\(\\frac{I_0}{16}\\)"
          }
        ],
        subject: "Physics",
        chapter: "Wave Optics",
        text: "Two polaroids \\(P_1\\) and \\(P_2\\) are placed with their axis perpendicular to each other. Unpolarised light \\(I_0\\) is incident on \\(P_1\\). A third polaroid \\(P_3\\) is kept in between \\(P_1\\) and \\(P_2\\) such that its axis makes an angle \\(45\\degree\\) with that of \\(P_1\\). The intensity of transmitted light through \\(P_2\\) is"
      },
      {
        id: 158347107674,
        answer: 353518099056,
        options: [
          {
            id: 112947412517,
            text: "\\(32\\pi \\mu C\\)"
          },
          {
            id: 751495886279,
            text: "\\(16 \\mu C\\)"
          },
          {
            id: 353518099056,
            text: "\\(32 \\mu C\\)"
          },
          {
            id: 259390148378,
            text: "\\(16\\pi \\mu C\\)"
          }
        ],
        subject: "Physics",
        chapter: "Electromagnetic Induction",
        text: "A long solenoid of diameter 0.1 m has \\(2 \\times 10^4\\) turns per meter. At the centre of the solenoid, a coil of 100 turns and radius 0.01 m is placed with its axis coinciding with the solenoid axis. The current in the solenoid reduces at a constant rate to 0 A from 4 A in 0.05 s. If the resistance of the coil is \\(10\\pi^2\\Omega\\), the total charge flowing through the coil during this time is"
      },
      {
        id: 280223000630,
        answer: 401737062880,
        options: [
          {
            id: 105029381888,
            text: "\\(\\frac{1}{2}I(\\omega_1+\\omega_2)^2\\)"
          },
          {
            id: 401737062880,
            text: "\\(\\frac{1}{4}I(\\omega_1-\\omega_2)^2\\)"
          },
          {
            id: 911127331955,
            text: "\\(I(\\omega_1-\\omega_2)^2\\)"
          },
          {
            id: 803774468107,
            text: "\\(\\frac{1}{8}I(\\omega_1-\\omega_2)^2\\)"
          }
        ],
        subject: "Physics",
        chapter: "System of Particles and Rotational Motion",
        text: "Two discs of same moment of inertia rotating about their regular axis passing through centre and perpendicular ot the plane of disc with angular velocities \\(\\omega_1\\) and \\(\\omega_2\\). They are brought into contact face to face coinciding the axis of rotation. The expression for loss of energy during this process is"
      },
      {
        id: 836844454719,
        answer: 975571798534,
        options: [
          {
            id: 388038201101,
            text: "\\(\\frac{t_1+t_2}{2}\\)"
          },
          {
            id: 100106962149,
            text: "\\(\\frac{t_1t_2}{t_2-t_1}\\)"
          },
          {
            id: 975571798534,
            text: "\\(\\frac{t_1t_2}{t_1+t_2}\\)"
          },
          {
            id: 270309091607,
            text: "\\(t_1-t_2\\)"
          }
        ],
        subject: "Physics",
        chapter: "Motion in a Straight Line",
        text: "Preeti reached the metro station and found that the escalator was not working. She walked up the stationary escalator in time \\(t_1\\). On other days, if she remains stationary on the moving escalator, then the escalator takes her up in time \\(t_2\\). The time taken by her to walk up on the moving escalator will be"
      },
      {
        id: 435965067639,
        answer: 329716334227,
        options: [
          {
            id: 300141055946,
            text: "\\(25 m/s^2\\)"
          },
          {
            id: 164891860799,
            text: "\\(0.25 rad/s^2\\)"
          },
          {
            id: 329716334227,
            text: "\\(25 rad/s^2\\)"
          },
          {
            id: 530625134163,
            text: "\\(5 m/s^2\\)"
          }
        ],
        subject: "Physics",
        chapter: "System of Particles and Rotational Motion",
        text: "A rope is wound around a hollow cylinder of mass 3kg and radius 40cm. What is the angular acceleration of cylinder if the rope is pulled with a force of 30N?"
      },
      {
        id: 511393740673,
        answer: 532852033829,
        options: [
          {
            id: 532852033829,
            text: "\\(\\frac{y}{2x}\\)"
          },
          {
            id: 228844308920,
            text: "\\(\\frac{y}{x}\\)"
          },
          {
            id: 186023408444,
            text: "\\(\\frac{x}{2y}\\)"
          },
          {
            id: 973255669072,
            text: "\\(\\frac{x}{y}\\)"
          }
        ],
        subject: "Physics",
        chapter: "Ray Optics and Optical Instruments",
        text: "A beam of light from a source L is incident normally on a plane mirror fixed at a certain distance x from the source. The beam is reflected back as a spot on a scale placed just above the source L. When the mirror is rotated through a small angle \\(\\theta\\), the spot of the light is found to move through a distance of y on the scale. The angle \\(\\theta\\) is given by"
      },
      {
        id: 293246871477,
        answer: 150322422877,
        options: [
          {
            id: 554457300030,
            text: "10Hz"
          },
          {
            id: 150322422877,
            text: "20Hz"
          },
          {
            id: 766649660789,
            text: "30Hz"
          },
          {
            id: 941275861889,
            text: "40Hz"
          }
        ],
        subject: "Physics",
        chapter: "Waves",
        text: "The two nearest harmonics of a tube closed at one end and open at other end are 220Hz and 260Hz. What is fundamental frequency of the system?"
      },
      {
        id: 549277627713,
        answer: 662407117946,
        options: [
          {
            id: 942971002046,
            text: "\\(4\\degree\\)"
          },
          {
            id: 662407117946,
            text: "\\(6\\degree\\)"
          },
          {
            id: 779109218425,
            text: "\\(8\\degree\\)"
          },
          {
            id: 692819234083,
            text: "\\(10\\degree\\)"
          }
        ],
        subject: "Physics",
        chapter: "Ray Optics and Optical Instruments",
        text: "A thin prism having refracting angle \\(10\\degree\\) is made of glass of refractive index 1.42. This prism is combined with another thin prism of glass of refractive index 1.7. This combination produces dispersion without deviation. The refracting angle of second prism should be"
      },
      {
        id: 860075368124,
        answer: 897789969479,
        options: [
          {
            id: 138143143522,
            text: "nR"
          },
          {
            id: 934372030436,
            text: "R/n"
          },
          {
            id: 897789969479,
            text: "\\(n^2R\\)"
          },
          {
            id: 879358403516,
            text: "\\(R \\over n^2\\)"
          }
        ],
        subject: "Physics",
        chapter: "Current Electricity",
        text: "The resistance of a wire is 'R' ohm. If it melted and stretched to 'n' times its original length, its new resistance will be"
      },
      {
        id: 899025627066,
        answer: 282529773939,
        options: [
          {
            id: 132663122035,
            text: "Bond angle remains same but bond length changes"
          },
          {
            id: 604361559398,
            text: "Bond angle changes but bond length remains same"
          },
          {
            id: 500041171519,
            text: "Both bond angle and bond length change"
          },
          {
            id: 282529773939,
            text: "Both bond angles and bond length remains same"
          }
        ],
        subject: "Chemistry",
        chapter: "Hydrocarbons",
        text: "With respect to the conformers of ethane, which of the following statements is true?"
      },
      {
        id: 983701687292,
        answer: 238588280106,
        options: [
          {
            id: 967115167822,
            text: "\\(BeCl_2, XeF_2\\)"
          },
          {
            id: 735555716340,
            text: "\\(Tel_2, XeF_2\\)"
          },
          {
            id: 238588280106,
            text: "\\(IBr_2^-, XeF_2\\)"
          },
          {
            id: 476683744640,
            text: "\\(IF_3, XeF_2\\)"
          }
        ],
        subject: "Chemistry",
        chapter: "Chemical Bonding and Molecular Structure",
        text: "Which of the following pairs of compounds is isoelectronic and isostructural?"
      },
      {
        id: 148083069965,
        answer: 669739557941,
        options: [
          {
            id: 609420693180,
            text: "\\(HgI_2, I_3^-\\)"
          },
          {
            id: 665825273357,
            text: "\\(HgI_2, I^-\\)"
          },
          {
            id: 669739557941,
            text: "\\(HgI_4^{2-}, I_3^-\\)"
          },
          {
            id: 206352925424,
            text: "\\(Hg_2I_2, I^-\\)"
          }
        ],
        subject: "Chemistry",
        chapter: "d-Block",
        text: "\\(HgCl_2\\) and \\(I_2\\) both when dissolved in water containing \\(I^-\\) ions the pair of species formed is"
      },
      {
        id: 912969158848,
        answer: 471664999008,
        options: [
          {
            id: 757797240496,
            text: "Analgesic"
          },
          {
            id: 471664999008,
            text: "Antiseptic"
          },
          {
            id: 907180892717,
            text: "Antipyretic"
          },
          {
            id: 798015744975,
            text: "Antibiotic"
          }
        ],
        subject: "Chemistry",
        chapter: "Chemistry in Everyday Life",
        text: "Mixture of chloroxylenol and terpineol acts as"
      },
      {
        id: 223163054588,
        answer: 529325893197,
        options: [
          {
            id: 529325893197,
            text: "\\(FeO_{0.98}\\) has non stoichiometric metal deficiency defect"
          },
          {
            id: 421311878806,
            text: "Density decreases in case of crystals with Schottky's defect"
          },
          {
            id: 274925846911,
            text: "NaCl(s) is insulator, silicon is semiconductor, silver is conductor, quartz is piezo electric crystal"
          },
          {
            id: 505346114e3,
            text: "Frenkel defect is favoured in those ionic compounds in which sizes of cation and anions are largely different"
          }
        ],
        subject: "Chemistry",
        chapter: "The Solid State",
        text: "Which is the incorrect statement?"
      },
      {
        id: 853474135028,
        answer: 801607919662,
        options: [
          {
            id: 235231449073,
            text: "\\(2.42 \\times 10^{-8}\\)"
          },
          {
            id: 932316035295,
            text: "\\(2.66 \\times 10^{-12}\\)"
          },
          {
            id: 896269231216,
            text: "\\(4.5 \\times 10^{-11}\\)"
          },
          {
            id: 801607919662,
            text: "\\(5.3 \\times 10^{-12}\\)"
          }
        ],
        subject: "Chemistry",
        chapter: "Equilibrium",
        text: "Concentration of the \\(Ag^+\\) ions in a saturated solution of \\(Ag_2C_2O_4\\) is \\(2.2 \\times 10^-4 mol L^{-1}\\). Solubility product of \\(Ag_2C_2O_4\\) is"
      },
      {
        id: 437105555632,
        answer: 343684119034,
        options: [
          {
            id: 154679096525,
            image: "https://i.ibb.co/27V1yGB/option1.jpg"
          },
          {
            id: 343684119034,
            image: "https://i.ibb.co/Sd2v2G2/option2.jpg"
          },
          {
            id: 902573014945,
            image: "https://i.ibb.co/BT4PB2r/option3.jpg"
          },
          {
            id: 225616138247,
            image: "https://i.ibb.co/QXjJJKS/option4.jpg"
          }
        ],
        subject: "Chemistry",
        chapter: "Aldehydes, Ketones and Carboxylic Acids",
        text: "Of the following, which is the product formed when cyclohexanone undergoes aldol condensation followed by heating?"
      },
      {
        id: 690701117003,
        answer: 823816820645,
        options: [
          {
            id: 701027340259,
            text: "\\(PH_3\\)"
          },
          {
            id: 441225256505,
            text: "\\(ClF_3\\)"
          },
          {
            id: 169786341174,
            text: "\\(NCl_3\\)"
          },
          {
            id: 823816820645,
            text: "\\(BCl_3\\)"
          }
        ],
        subject: "Chemistry",
        chapter: "Chemical Bonding and Molecular Structure",
        text: "The species, having bond angles of \\(120\\degree\\) is"
      },
      {
        id: 250587580209,
        answer: 740220841416,
        options: [
          {
            id: 671378302687,
            text: "Doubled"
          },
          {
            id: 492609352555,
            text: "Halved"
          },
          {
            id: 460756326161,
            text: "Tripled"
          },
          {
            id: 740220841416,
            text: "Unchanged"
          }
        ],
        subject: "Chemistry",
        chapter: "Solutions",
        text: "If molality of the dilute solution is doubled, the value of molal depression constant (\\(K_f\\)) will be"
      },
      {
        id: 485446021846,
        answer: 312694317592,
        options: [
          {
            id: 848799831132,
            image: "https://i.ibb.co/xFYtnBH/option1.jpg"
          },
          {
            id: 578021839648,
            image: "https://i.ibb.co/yVxpq4d/option2.jpg"
          },
          {
            id: 105402325417,
            image: "https://i.ibb.co/zr61B5T/option3.jpg"
          },
          {
            id: 312694317592,
            image: "https://i.ibb.co/VYq3SWX/option4.jpg"
          }
        ],
        subject: "Chemistry",
        chapter: "Alcohols, Phenols and Ethers",
        text: "Which one is the most acidic compound?"
      },
      {
        id: 794106189172,
        answer: 178662461304,
        options: [
          {
            id: 178662461304,
            text: "\\(Sn^{2+}\\) is reducing while \\(Pb^{4+}\\) is oxidising"
          },
          {
            id: 650326301233,
            text: "\\(Sn^{2+}\\) is oxidising while \\(Pb^{4+}\\) is reducing"
          },
          {
            id: 605038823920,
            text: "\\(Sn^{2+}\\) and \\(Pb^{2+}\\) are both oxidising and reducing"
          },
          {
            id: 880170896877,
            text: "\\(Sn^{4+}\\) is reducing while \\(Pb^{4+}\\) is oxidising"
          }
        ],
        subject: "Chemistry",
        chapter: "p-Block",
        text: "It is because of inability of \\(ns^2\\) electrons of the valence shell to participate in bonding that"
      },
      {
        id: 347379239948,
        answer: 417305418023,
        options: [
          {
            id: 375926783974,
            image: "https://i.ibb.co/R25TNhB/option1.jpg"
          },
          {
            id: 319215797639,
            image: "https://i.ibb.co/n195WZ9/option2.jpg"
          },
          {
            id: 769322600978,
            image: "https://i.ibb.co/xCZkfv2/option3.jpg"
          },
          {
            id: 417305418023,
            image: "https://i.ibb.co/cxfxQcN/option4.jpg"
          }
        ],
        subject: "Chemistry",
        chapter: "Hydrocarbons",
        text: "Predict the correct intermediate and product in the following reaction",
        image: "https://i.ibb.co/ZcCgDhr/Screenshot-2022-04-10-23-33-28-439-letest-ncertbooks.jpg"
      },
      {
        id: 188276210666,
        answer: 271849533670,
        options: [
          {
            id: 809579664661,
            text: "Catalyst does not initiate any reaction"
          },
          {
            id: 271849533670,
            text: "The value of equilibrium constant is changed in the presence of a catalyst in the reaction at equilibrium"
          },
          {
            id: 259341758096,
            text: "Enzymes catalyse mainly bio-chemical reactions"
          },
          {
            id: 885570607743,
            text: "Coenzymes increase the catalytic activity of enzyme"
          }
        ],
        subject: "Chemistry",
        chapter: "Surface Chemistry",
        text: "Which one of the following statements is not correct?"
      },
      {
        id: 614697657165,
        answer: 947312195365,
        options: [
          {
            id: 705281278324,
            text: "de-Broglie's wavelength is given by \\(\\lambda = \\frac{h}{mv}\\), where m = mass of the particle, v = group velocity of the particle"
          },
          {
            id: 425129320643,
            text: "The uncertainity principle is \\(\\Delta E \\times \\Delta t \\geq \\frac{h}{4\\pi}\\)"
          },
          {
            id: 761820944238,
            text: "Half-filled and fully filled orbitals have greater stability due to greater exchange energy, greater symmetry and more balanced arrangement"
          },
          {
            id: 947312195365,
            text: "The energy of 2s orbital is less than the energy of 2p orbital in case of Hydrogen like atoms"
          }
        ],
        subject: "Chemistry",
        chapter: "Structure of Atom",
        text: "Which one is the wrong statement?"
      },
      {
        id: 608609470139,
        answer: 567134227444,
        options: [
          {
            id: 491189890224,
            text: "1136.25J"
          },
          {
            id: 524390217022,
            text: "-500J"
          },
          {
            id: 567134227444,
            text: "-505J"
          },
          {
            id: 829388568344,
            text: "+505J"
          }
        ],
        subject: "Chemistry",
        chapter: "Thermodynamics",
        text: "A gas is allowed to expand in a well insulated container against a constant external pressure of 2.5atm from an initial volume of 2.50L to a final volume 4.50L. The change in internal energy \\(\\Delta U\\) of the gas in joules will be"
      },
      {
        id: 385068308841,
        answer: 729132077611,
        options: [
          {
            id: 737242749291,
            text: "A-Methoxymethane, X-Ethanoic acid, Y-Acetate ion, Z-hydrazine"
          },
          {
            id: 944309659949,
            text: "A-Methoxymethane, X-Ethanol, Y-Ethanoic acid, Z-Semicarbazide"
          },
          {
            id: 729132077611,
            text: "A-Ethanal, X-Ethanol, Y-But-2-enal, Z-Semicarbazone"
          },
          {
            id: 995032842397,
            text: "A-Ethanol, X-Acetaldehyde, Y-Butanone, Z-Hydrazone"
          }
        ],
        subject: "Chemistry",
        chapter: "Aldehydes, Ketones and Carboxylic Acids",
        text: "Identify A, X, Y and Z",
        image: "https://i.ibb.co/47bHJz6/Screenshot-2022-04-11-16-12-59-851-letest-ncertbooks.jpg"
      },
      {
        id: 932964070480,
        answer: 141486808115,
        options: [
          {
            id: 632348417301,
            text: "\\(CH_2 = CH_2 \\gt CH_3 - CH = CH_2 \\gt CH_3 - C \\equiv CH \\gt CH \\equiv CH\\)"
          },
          {
            id: 141486808115,
            text: "\\(CH \\equiv CH \\gt CH_3 - C \\equiv CH \\gt CH_2 = CH_2 \\gt CH_3 - CH_3\\)"
          },
          {
            id: 276895942096,
            text: "\\(CH \\equiv CH \\gt CH_2 = CH_2 \\gt CH_3 - C \\equiv CH \\gt CH_3 - CH_3\\)"
          },
          {
            id: 124799408906,
            text: "\\(CH_3 - CH_3 \\gt CH_2 = CH_2 \\gt CH_3 - C \\equiv CH \\gt CH \\equiv CH\\)"
          }
        ],
        subject: "Chemistry",
        chapter: "Hydrocarbons",
        text: "Which one is the correct order of acidity?"
      },
      {
        id: 975336588213,
        answer: 267248071837,
        options: [
          {
            id: 962472046362,
            text: "\\(E_1 = E_2\\)"
          },
          {
            id: 863136825247,
            text: "\\(E_1 < E_2\\)"
          },
          {
            id: 267248071837,
            text: "\\(E_1 > E_2\\)"
          },
          {
            id: 551242663601,
            text: "\\(E_2 = 0 \\neq E_1\\)"
          }
        ],
        subject: "Chemistry",
        chapter: "Electrochemistry",
        text: "In an electrochemical cell: \\(Zn|ZnSO_4(0.01M)||CuSO_4(1.0M)|Cu\\), the emf of this Daniel cell is \\(E_1\\). When the concentration of \\(ZnSO_4\\) is changed to 1.0M and that of \\(CuSO_4\\) changed to 0.01M, the emf changes to \\(E_2\\). From the following, which one is the relationship between \\(E_1\\) and \\(E_2\\)? (Given \\(\\frac{RT}{F} = 0.059\\))"
      },
      {
        id: 960269794936,
        answer: 461360322137,
        options: [
          {
            id: 480542811441,
            text: "II < III < I"
          },
          {
            id: 103208627809,
            text: "III < I < II"
          },
          {
            id: 284139157759,
            text: "III < II < I"
          },
          {
            id: 461360322137,
            text: "II < I < III"
          }
        ],
        subject: "Chemistry",
        chapter: "Amines",
        text: "The correct increasing order of basic strength for the following compounds is",
        image: "https://i.ibb.co/R4vRzPs/Screenshot-2022-04-11-16-49-53-148-letest-ncertbooks.jpg"
      },
      {
        id: 575091003092,
        answer: 632666090683,
        options: [
          {
            id: 707263090683,
            text: "\\(S_2O_7^{2-}, S_2O_3^{2-}\\)"
          },
          {
            id: 632666090683,
            text: "\\(S_4O_6^{2-}, S_2O_3^{2-}\\)"
          },
          {
            id: 586126533032,
            text: "\\(S_2O_7^{2-}, S_2O_8^{2-}\\)"
          },
          {
            id: 170333318035,
            text: "\\(S_4O_6^{2-}, S_2O_7^{2-}\\)"
          }
        ],
        subject: "Chemistry",
        chapter: "p-Block",
        text: "In which pair of ions both the species contain S-S bond?"
      },
      {
        id: 235957964848,
        answer: 762259459600,
        options: [
          {
            id: 982948806146,
            text: "1 AgCl, 3 AgCl, 2 AgCl"
          },
          {
            id: 807502359274,
            text: "3 AgCl, 1 AgCl, 2 AgCl"
          },
          {
            id: 762259459600,
            text: "3 AgCl, 2 AgCl, 1 AgCl"
          },
          {
            id: 601211522254,
            text: "2 AgCl, 3 AgCl, 1 AgCl"
          }
        ],
        subject: "Chemistry",
        chapter: "Coordination Compounds",
        text: "The correct order of the stoichiometries of \\(AgCl\\) formed \\(AgNO_3\\) in excess is treated with the complexes: \\(CoCl_3\\cdot 6NH_3, CoCl_3\\cdot 5NH_3, CoCl_3\\cdot 4NH_3\\) respectively is"
      },
      {
        id: 963640575077,
        answer: 405163899384,
        options: [
          {
            id: 785267326307,
            text: "1"
          },
          {
            id: 405163899384,
            text: "2"
          },
          {
            id: 522267559824,
            text: "3"
          },
          {
            id: 175530816287,
            text: "4"
          }
        ],
        subject: "Chemistry",
        chapter: "Chemical Bonding and Molecular Structure",
        text: "Match the interhalogen compounds of column I with the geometry in column II and assign the correct code",
        image: "https://i.ibb.co/pvvPmTk/Screenshot-2022-04-11-16-58-29-027-letest-ncertbooks.jpg"
      },
      {
        id: 902554535406,
        answer: 276821069224,
        options: [
          {
            id: 867690194352,
            text: "The radioactive nature of actionoids"
          },
          {
            id: 301361057735,
            text: "Actinoid contraction"
          },
          {
            id: 276821069224,
            text: "5f, 6d and 7s levels having comparable energies"
          },
          {
            id: 685971118259,
            text: "4f and 5d levels being close in energies"
          }
        ],
        subject: "Chemistry",
        chapter: "f-Block",
        text: "The reason for greater range of oxidation states actinoids is attributed to"
      },
      {
        id: 612470857971,
        answer: 296203651777,
        options: [
          {
            id: 296203651777,
            text: "5 litre"
          },
          {
            id: 851990629992,
            text: "10 litre"
          },
          {
            id: 105068397433,
            text: "4 litre"
          },
          {
            id: 135060319717,
            text: "2 litre"
          }
        ],
        subject: "Chemistry",
        chapter: "Equilibrium",
        text: "A 20 litre container at 400 K contains \\(CO_2(g)\\) at pressure 0.4atm and an excess of \\(SrO\\) (neglect the volume of solid \\(SrO\\)). The volume of the containers is now decreased by moving the movable piston fitted in the container. The maximum volume of the container, when pressure of \\(CO_2\\) attains its maximum value, will be (Given that: \\(SrCO_3(s) \\rightleftharpoons SrO(s) + CO_2(g), K_p = 1.6 atm\\))"
      },
      {
        id: 151790890934,
        answer: 712237819728,
        options: [
          {
            id: 545109142169,
            text: "Electrophile is a negatively charged species and can form a bond by accepting a pair of electrons from a nucleophile"
          },
          {
            id: 284961470675,
            text: "Electrophile is a negatively charged species and can form a bond by accepting a pair of electrons from another electrophile"
          },
          {
            id: 147269779589,
            text: "Electrons are generally neutral species and can form a bond by accepting a pair of electrons from a nucleophile"
          },
          {
            id: 712237819728,
            text: "Electrons can be either neutral or positively charged species and can form a bond by accepting a pair of electrons from a nucleophile"
          }
        ],
        subject: "Chemistry",
        chapter: "General Organic Chemistry",
        text: "The correct statement regarding electrophile is"
      },
      {
        id: 905774977435,
        answer: 319033222907,
        options: [
          {
            id: 703765790360,
            text: "Haemoglobin"
          },
          {
            id: 319033222907,
            text: "Micro-organisms present in soil"
          },
          {
            id: 362101374351,
            text: "Oceans"
          },
          {
            id: 595952460560,
            text: "Plants"
          }
        ],
        subject: "Chemistry",
        chapter: "Enviromental Chemistry",
        text: "Which of the following is a sink for \\(CO\\)?"
      },
      {
        id: 461565253692,
        answer: 802729175465,
        options: [
          {
            id: 703890511370,
            text: "Halogen family, \\([Rn]5f^{14}6d^{10}7s^{2}7p^{5}\\)"
          },
          {
            id: 802729175465,
            text: "Carbon family, \\([Rn]5f^{14}6d^{10}7s^{2}7p^{2}\\)"
          },
          {
            id: 410578582807,
            text: "Oxygen family, \\([Rn]5f^{14}6d^{10}7s^{2}7p^{4}\\)"
          },
          {
            id: 400401593790,
            text: "Nitrogen family, \\([Rn]5f^{14}6d^{10}7s^{2}7p^{6}\\)"
          }
        ],
        subject: "Chemistry",
        chapter: "Classification of Elements and Periodicity in Properties",
        text: "The element \\(Z = 114\\) has been discovered recently. It will belong to which of the following family group and electronic configuration?"
      },
      {
        id: 817461186614,
        answer: 792111309762,
        options: [
          {
            id: 792111309762,
            text: "\\( [Co(en)_3]^{3+}, [Co(NH_3)_6]^{3+}, [Co(H_2O)_6]^{3+} \\)"
          },
          {
            id: 748396360021,
            text: "\\( [Co(H_2O)_6]^{3+}, [Co(en)_3]^{3+}, [Co(NH_3)_6]^{3+} \\)"
          },
          {
            id: 145721518958,
            text: "\\( [Co(NH_3)_6]^{3+}, [Co(en)_3]^{3+}, [Co(H_2O)_6]^{3+} \\)"
          },
          {
            id: 270953222564,
            text: "\\( [Co(H_2O)_6]^{3+}, [Co(NH_3)_6]^{3+}, [Co(en)_3]^{3+} \\)"
          }
        ],
        subject: "Chemistry",
        chapter: "Coordination Compounds",
        text: "Correct increasing order for the wavelengths of absorption in the visible region for the complexes of \\(Co^{3+}\\) is"
      },
      {
        id: 809291237853,
        answer: 239205776432,
        options: [
          {
            id: 987204361354,
            text: "Insulin maintains sugar level in the blood of a human body"
          },
          {
            id: 697538940957,
            text: "Ovalbumin is a simple food reserve in egg-white"
          },
          {
            id: 489451516739,
            text: "Blood proteins thrombin and fibrinogen are involved in blood clotting"
          },
          {
            id: 239205776432,
            text: "Denaturation makes the proteins more active"
          }
        ],
        subject: "Chemistry",
        chapter: "Biomolecules",
        text: "Which of the following statements is not correct?"
      },
      {
        id: 228890997281,
        answer: 463101662798,
        options: [
          {
            id: 452887140029,
            text: "Ruthenocene"
          },
          {
            id: 463101662798,
            text: "Grignard's reagent"
          },
          {
            id: 833591120670,
            text: "Ferrocene"
          },
          {
            id: 883740445293,
            text: "Cobaltocene"
          }
        ],
        subject: "Chemistry",
        chapter: "Coordination Compounds",
        text: "An example of a sigma bonded organometallic compound is:"
      },
      {
        id: 678956363962,
        answer: 504919009844,
        options: [
          {
            id: 887651394898,
            text: "Molality"
          },
          {
            id: 504919009844,
            text: "Molarity"
          },
          {
            id: 863603909070,
            text: "Mole fraction"
          },
          {
            id: 157931608592,
            text: "Weight percentage"
          }
        ],
        subject: "Chemistry",
        chapter: "Some Basic Concepts of Chemistry",
        text: "Which of the following is dependent on temperature?"
      },
      {
        id: 968302055249,
        answer: 528950240495,
        options: [
          {
            id: 872636102495,
            text: "T < 425K"
          },
          {
            id: 528950240495,
            text: "T > 425K"
          },
          {
            id: 580714421966,
            text: "All temperatures"
          },
          {
            id: 788965210109,
            text: "T > 298K"
          }
        ],
        subject: "Chemistry",
        chapter: "Thermodynamics",
        text: "For a given reaction, \\(\\Delta H = 35.3 kJ mol^{-1}\\) and \\(\\Delta S = 83.6 JK^{-1} mol^{-1}\\). The reaction is spontaneous at: (Assume that \\(\\Delta H\\) and \\(\\Delta S\\) do not vary with temperature)"
      },
      {
        id: 824906650685,
        answer: 771046683466,
        options: [
          {
            id: 679398943494,
            text: "Sublimation"
          },
          {
            id: 182946806545,
            text: "Chromatography"
          },
          {
            id: 782612049457,
            text: "Crystallisation"
          },
          {
            id: 771046683466,
            text: "Steam distillation"
          }
        ],
        subject: "Chemistry",
        chapter: "General Organic Chemistry",
        text: "The most suitable method of separation of 1:1 mixture of ortho and para-nitrophenols is"
      },
      {
        id: 765648059976,
        answer: 230849944812,
        options: [
          {
            id: 491298045059,
            text: "\\(CO, NO\\)"
          },
          {
            id: 703748194915,
            text: "\\(O_2, NO^+\\)"
          },
          {
            id: 230849944812,
            text: "\\(CN^-, CO\\)"
          },
          {
            id: 105364048815,
            text: "\\(N_2, O_2^-\\)"
          }
        ],
        subject: "Chemistry",
        chapter: "Chemical Bonding and Molecular Structure",
        text: "Which one of the following pairs of species have the same bond order?"
      },
      {
        id: 503979395244,
        answer: 943656586689,
        options: [
          {
            id: 943656586689,
            image: "https://i.ibb.co/DM4rqhs/option1.jpg"
          },
          {
            id: 623022043415,
            image: "https://i.ibb.co/pRkvxzC/option2.jpg"
          },
          {
            id: 117989092282,
            image: "https://i.ibb.co/DCqmctN/option3.jpg"
          },
          {
            id: 691483760303,
            image: "https://i.ibb.co/mqtB9XW/option4.jpg"
          }
        ],
        subject: "Chemistry",
        chapter: "Haloalkanes and Haloarenes",
        text: "Identify A and type of reaction",
        image: "https://i.ibb.co/sRV7D5C/Screenshot-2022-04-11-20-33-23-379-letest-ncertbooks.jpg"
      },
      {
        id: 932443900768,
        answer: 983218177717,
        options: [
          {
            id: 528531674990,
            text: "238.6 s"
          },
          {
            id: 983218177717,
            text: "138.6 s"
          },
          {
            id: 320317263908,
            text: "346.5 s"
          },
          {
            id: 402465691437,
            text: "693.0 s"
          }
        ],
        subject: "Chemistry",
        chapter: "Chemical Kinetics",
        text: "A first order reaction has a specific reaction rate of \\(10^{-2} s^{-1}\\). How much time will it take for 20 g of the reactant to reduce to 5 g?"
      },
      {
        id: 804075756661,
        answer: 256599162213,
        options: [
          {
            id: 310787994175,
            text: "\\(CO_2\\)"
          },
          {
            id: 256599162213,
            text: "\\(SO_2\\)"
          },
          {
            id: 676098553539,
            text: "\\(NO_2\\)"
          },
          {
            id: 867633771776,
            text: "\\(P_2O_5\\)"
          }
        ],
        subject: "Chemistry",
        chapter: "d-Block",
        text: "Name the gas that readily decolourises acidified \\(KMnO_4\\) solution:"
      },
      {
        id: 496592199414,
        answer: 679165880241,
        options: [
          {
            id: 646713648296,
            text: "Ethyl chlorides"
          },
          {
            id: 536046632275,
            text: "Iodobenzene"
          },
          {
            id: 679165880241,
            text: "Phenol"
          },
          {
            id: 899882281815,
            text: "Benzene"
          }
        ],
        subject: "Chemistry",
        chapter: "Alcohols, Phenols and Ethers",
        text: "The heating of phenyl-methyl ethers with \\(HI\\) produces:"
      },
      {
        id: 660377155778,
        answer: 611546291549,
        options: [
          {
            id: 832292227215,
            text: "It is \\(sp^3d^2\\) hybridised and octahedral"
          },
          {
            id: 332594608890,
            text: "It is \\(sp^3d^2\\) hybridised and tetrahedral"
          },
          {
            id: 611546291549,
            text: "It is \\(d^2sp^3\\) hybridised and octahedral"
          },
          {
            id: 685440553661,
            text: "It is \\(dsp^2\\) hybridised and square planar"
          }
        ],
        subject: "Chemistry",
        chapter: "Coordination Compounds",
        text: "Pick out the correct statement with respect \\([Mn(CN)_6]^{3-}\\):"
      },
      {
        id: 674593764491,
        answer: 137849718779,
        options: [
          {
            id: 794712303589,
            text: "Na"
          },
          {
            id: 436425294717,
            text: "K"
          },
          {
            id: 689497746981,
            text: "Rb"
          },
          {
            id: 137849718779,
            text: "Li"
          }
        ],
        subject: "Chemistry",
        chapter: "Electrochemistry",
        text: "Ionic mobility of which of the following alkali metal ions is lowest when aqueous solution of their salts are put under an electric field?"
      },
      {
        id: 930500759947,
        answer: 828363422162,
        options: [
          {
            id: 355376755158,
            text: "\\(\\frac{K_1K_3^3}{K_2}\\)"
          },
          {
            id: 828363422162,
            text: "\\(\\frac{K_2K_3^3}{K_1}\\)"
          },
          {
            id: 924744663657,
            text: "\\(\\frac{K_2K_3}{K_1}\\)"
          },
          {
            id: 238662053315,
            text: "\\(\\frac{K_2^3K_3}{K_1}\\)"
          }
        ],
        subject: "Chemistry",
        chapter: "Equilibrium",
        text: "Find K in terms of \\(K_1, K_2, K_3\\):",
        image: "https://i.ibb.co/VDNxGLv/Screenshot-2022-04-11-20-47-49-731-letest-ncertbooks.jpg"
      },
      {
        id: 213190979881,
        answer: 946373217968,
        options: [
          {
            id: 927660325120,
            text: "Carbylamine reaction"
          },
          {
            id: 946373217968,
            text: "Hoffmann hypobromamide reaction"
          },
          {
            id: 167451874208,
            text: "Stephens reaction"
          },
          {
            id: 399407344151,
            text: "Gabriels phthalimide synthesis"
          }
        ],
        subject: "Chemistry",
        chapter: "Amines",
        text: "Which of the following reactions is appropriate for converting acetamide to methanamine?"
      },
      {
        id: 377259393783,
        answer: 786803447627,
        options: [
          {
            id: 492613720165,
            text: "1"
          },
          {
            id: 604124805740,
            text: "2"
          },
          {
            id: 406478720486,
            text: "0"
          },
          {
            id: 786803447627,
            text: "1.5"
          }
        ],
        subject: "Chemistry",
        chapter: "Chemical Kinetics",
        text: "Mechanism of a hypothetical reaction \\(X_2 + Y_2 \\rightarrow 2XY\\) is given in the figure. The overall order of the reaction will be",
        image: "https://i.ibb.co/ct35C1H/Screenshot-2022-04-11-20-53-47-306-letest-ncertbooks.jpg"
      },
      {
        id: 648569009398,
        answer: 811483544441,
        options: [
          {
            id: 811483544441,
            text: "3-keto-2-methylhex-4-enal"
          },
          {
            id: 107745310431,
            text: "5-formylhex-2-en-3-one"
          },
          {
            id: 405784876084,
            text: "5-methyl-4-oxohex-2-en-5-al"
          },
          {
            id: 139861099264,
            text: "3-keto-2-methylhex-5-enal"
          }
        ],
        subject: "Chemistry",
        chapter: "General Organic Chemistry",
        text: "The IUPAC name of the compound",
        image: "https://i.ibb.co/6J3LkBH/Screenshot-2022-04-11-20-56-13-314-letest-ncertbooks.jpg"
      },
      {
        id: 400799313485,
        answer: 747296074873,
        options: [
          {
            id: 529290334480,
            text: "Liquation"
          },
          {
            id: 242955926274,
            text: "Distillation"
          },
          {
            id: 224801945697,
            text: "Zone refining"
          },
          {
            id: 747296074873,
            text: "Displacement with Zn"
          }
        ],
        subject: "Chemistry",
        chapter: "General Principles and Processes of Isolation of Elements",
        text: "Extraction of gold and silver involves leaching with \\(CN^-\\) ion. Silver is later recovered by"
      }
    ]
  }
];
const sharedPapers = (0, import_user_843637aa.w)(papers);
const activePaper = (0, import_user_843637aa.w)(null);
const activeQuestion = (0, import_user_843637aa.w)(null);
const addQuestionModal = modalStore();
const editQuestionModal = modalStore();
const deletePaperModal = modalStore();
const deleteQuestionModal = modalStore();
const startPaperModal = modalStore();
const allPapers = (0, import_user_843637aa.d)([sharedPapers, import_user_843637aa.p], ([sharedPapers2, userPapers2]) => [
  ...sharedPapers2,
  ...userPapers2
]);