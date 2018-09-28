import{padStart,startsWith,toLower,trimStart}from"lodash";import*as urls from"../constants/genomics-urls";// NCBI APIs
export var efetch=function(a,b){var c=2<arguments.length&&arguments[2]!==void 0?arguments[2]:"xml",d=3<arguments.length&&arguments[3]!==void 0?arguments[3]:"";return"".concat(urls.NCBI_EFETCH_ENDPOINT,"?retmode=").concat(c,"&db=").concat(a,"&id=").concat(b,"&").concat(d)};export var esummary=function(a,b){var c=2<arguments.length&&arguments[2]!==void 0?arguments[2]:"json",d=3<arguments.length&&arguments[3]!==void 0?arguments[3]:"";return"".concat(urls.NCBI_ESUMMARY_ENDPOINT,"?retmode=").concat(c,"&db=").concat(a,"&id=").concat(b,"&").concat(d)};export var esearch=function(a,b){var c=2<arguments.length&&arguments[2]!==void 0?arguments[2]:"json",d=3<arguments.length&&arguments[3]!==void 0?arguments[3]:"";return"".concat(urls.NCBI_ESEARCH_ENDPOINT,"?retmode=").concat(c,"&db=").concat(a,"&term=").concat(b,"&").concat(d)};// NCBI URLs
export var pubmedSearch=function(a){return"".concat(urls.PUBMED_URL,"/?term=").concat(a)};export var pubmedEntry=function(a){return"".concat(urls.PUBMED_URL,"/").concat(a)};export var variationViewer=function(a,b,c){var d=3<arguments.length&&arguments[3]!==void 0?arguments[3]:"GCF_000001405.25";return"".concat(urls.NCBI_VARIATION_URL,"/?assm=").concat(d,"&chr=").concat(a,"&from=").concat(b,"&to=").concat(c)};export var clinvarSearch=function(a){return"".concat(urls.CLINVAR_URL,"/?term=").concat(a)};export var clinvarEntry=function(a){return"".concat(urls.CLINVAR_URL,"/variation/").concat(a)};// Genomic URLs
export var cosmicEntry=function(a){var b=trimStart(a,"COSM");return"".concat(urls.COSMIC_URL,"/mutation/overview?id=").concat(b)};export var ensemblLocus=function(a,b,c){var d,e=3<arguments.length&&arguments[3]!==void 0?arguments[3]:"grch37",f=4<arguments.length&&arguments[4]!==void 0?arguments[4]:"Homo_sapiens";// TODO: This should be switched to a lookup object sicne genome and species are so related
if(["hg19","grch37"].includes(toLower(e)))d="".concat(urls.ENSEMBL_GRCH37_URL);else if(["hg38","grch38"].includes(toLower(e)))d="".concat(urls.ENSEMBL_GRCH38_URL);else throw new Error("genome: ".concat(e," not supported!"));return"".concat(d,"/").concat(f,"/Location/View?db=core;r=").concat(a,":").concat(b,"-").concat(c)};export var exacVariant=function(a,b,c,d){return"".concat(urls.EXAC_URL,"/variant/").concat(a,"-").concat(b,"-").concat(c,"-").concat(d)};export var gnomadVariant=function(a,b,c,d){return"".concat(urls.GNOMAD_URL,"/variant/").concat(a,"-").concat(b,"-").concat(c,"-").concat(d)};export var ucscLocus=function(a,b,c){var d=3<arguments.length&&arguments[3]!==void 0?arguments[3]:"hg19";return"".concat(urls.UCSC_URL,"/cgi-bin/hgTracks?db=").concat(d,"&position=chr").concat(a,":").concat(b,"-").concat(c)};export var dgvRegionSearch=function(a,b,c){return"".concat(urls.DGV_URL,"/gb2/gbrowse/dgv2_hg19/?name=chr").concat(a,":").concat(b,"-").concat(c,";search=Search")};// Gene Resources
export var geneCardsEntry=function(a){return"".concat(urls.GENE_CARDS_URL,"/cgi-bin/carddisp.pl?gene=").concat(a)};export var ghrEntry=function(a){return"".concat(urls.GHR_URL,"/gene/").concat(a)};export var hgncEntry=function(a){return"".concat(urls.HGNC_URL,"/cgi-bin/search?search_type=all&search=").concat(a)};export var geneReviewsEntry=function(a){return"".concat(urls.GENEREVIEWS_URL,"/?term=").concat(a)};export var gtexEntry=function(a){return"".concat(urls.GTEX_URL,"/home/gene/").concat(a)};export var exacGeneEntry=function(a){return"".concat(urls.EXAC_URL,"/gene/").concat(a)};export var gnomadGeneEntry=function(a){return"".concat(urls.GNOMAD_URL,"/gene/").concat(a)};// Clinical Resources
export var decipherVariant=function(a,b,c){return"".concat(urls.DECIPHER_URL,"/search?q=").concat(a,":").concat(b,"-").concat(c,"#consented-patients/results")};export var decipherRegionSearch=function(a,b,c){return"".concat(urls.DECIPHER_URL,"/search?q=chr").concat(a,":").concat(b,"-").concat(c,"#consented-patients/results")};export var hgmdVariant=function(a){return"".concat(urls.HGMD_URL,"/hgmd/pro/mut.php?acc=").concat(a)};export var hgmdGene=function(a){return"".concat(urls.HGMD_URL,"/hgmd/pro/gene.php?gene=").concat(a)};export var omimEntry=function(a){return"".concat(urls.OMIM_URL,"/entry/").concat(a)};export var omimSearch=function(a){return"".concat(urls.OMIM_URL,"/search/?index=entry&search=").concat(a)};// Phenotype Resources
export var hpoEntry=function(a){if(startsWith(a,"HP:"))return"".concat(urls.HPO_URL,"/hpoweb/showterm?id=").concat(a);var b=padStart(a,7,"0");return"".concat(urls.HPO_URL,"/hpoweb/showterm?id=HP:").concat(b)};export var orphanetEntry=function(a){return"".concat(urls.ORPHANET_URL,"/consor/cgi-bin/OC_Exp.php?Lng=EN&Expert=").concat(a)};// Internal Resources
export var alamutEntry=function(a){return"".concat(urls.ALAMUT_URL,"/show?request=").concat(a)};