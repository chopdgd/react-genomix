import { padStart, startsWith, toLower, trimStart } from 'lodash'

import * as urls from '../constants/genomics-urls'

// NCBI APIs
export const efetch = (db, id, retmode = 'xml', params = '') =>
  `${urls.NCBI_EFETCH_ENDPOINT}?retmode=${retmode}&db=${db}&id=${id}&${params}`

export const esummary = (db, id, retmode = 'json', params = '') =>
  `${urls.NCBI_ESUMMARY_ENDPOINT}?retmode=${retmode}&db=${db}&id=${id}&${params}`

export const esearch = (db, term, retmode = 'json', params = '') =>
  `${urls.NCBI_ESEARCH_ENDPOINT}?retmode=${retmode}&db=${db}&term=${term}&${params}`

// NCBI URLs
export const pubmedSearch = term => `${urls.PUBMED_URL}/?term=${term}`

export const pubmedEntry = pmid => `${urls.PUBMED_URL}/${pmid}`

export const variationViewer = (chr, start, end, assembly = 'GCF_000001405.25') =>
  `${urls.NCBI_VARIATION_URL}/?assm=${assembly}&chr=${chr}&from=${start}&to=${end}`

export const clinvarSearch = term => `${urls.CLINVAR_URL}/?term=${term}`

export const clinvarEntry = id => `${urls.CLINVAR_URL}/variation/${id}`

// Genomic URLs
export const cosmicEntry = id => {
  const trimmedId = trimStart(id, 'COSM')
  return `${urls.COSMIC_URL}/mutation/overview?id=${trimmedId}`
}

export const ensemblLocus = (chr, start, end, genome = 'grch37', species = 'Homo_sapiens') => {
  let url

  // TODO: This should be switched to a lookup object sicne genome and species are so related

  if (['hg19', 'grch37'].includes(toLower(genome))) {
    url = `${urls.ENSEMBL_GRCH37_URL}`
  } else if (['hg38', 'grch38'].includes(toLower(genome))) {
    url = `${urls.ENSEMBL_GRCH38_URL}`
  } else {
    throw new Error(`genome: ${genome} not supported!`)
  }

  return `${url}/${species}/Location/View?db=core;r=${chr}:${start}-${end}`
}

export const exacVariant = (chr, pos, ref, alt) => `${urls.EXAC_URL}/variant/${chr}-${pos}-${ref}-${alt}`

export const gnomadVariant = (chr, pos, ref, alt) => `${urls.GNOMAD_URL}/variant/${chr}-${pos}-${ref}-${alt}`

export const ucscLocus = (chr, start, end, genome = 'hg19') =>
  `${urls.UCSC_URL}/cgi-bin/hgTracks?db=${genome}&position=chr${chr}:${start}-${end}`

export const dgvRegionSearch = (chr, start, end) =>
  `${urls.DGV_URL}/gb2/gbrowse/dgv2_hg19/?name=chr${chr}:${start}-${end};search=Search`

// Gene Resources
export const geneCardsEntry = gene => `${urls.GENE_CARDS_URL}/cgi-bin/carddisp.pl?gene=${gene}`

export const ghrEntry = gene => `${urls.GHR_URL}/gene/${gene}`

export const hgncEntry = gene => `${urls.HGNC_URL}/cgi-bin/search?search_type=all&search=${gene}`

export const geneReviewsEntry = gene => `${urls.GENEREVIEWS_URL}/?term=${gene}`

export const gtexEntry = gene => `${urls.GTEX_URL}/home/gene/${gene}`

export const exacGeneEntry = gene => `${urls.EXAC_URL}/gene/${gene}`

export const gnomadGeneEntry = gene => `${urls.GNOMAD_URL}/gene/${gene}`

// Clinical Resources
export const decipherVariant = (chr, start, end) =>
  `${urls.DECIPHER_URL}/search?q=${chr}:${start}-${end}#consented-patients/results`

export const decipherRegionSearch = (chr, start, end) =>
  `${urls.DECIPHER_URL}/search?q=chr${chr}:${start}-${end}#consented-patients/results`

export const hgmdVariant = cdna => `${urls.HGMD_URL}/hgmd/pro/mut.php?acc=${cdna}`

export const hgmdGene = gene => `${urls.HGMD_URL}/hgmd/pro/gene.php?gene=${gene}`

export const omimEntry = id => `${urls.OMIM_URL}/entry/${id}`

export const omimSearch = term => `${urls.OMIM_URL}/search/?index=entry&search=${term}`

// Phenotype Resources
export const hpoEntry = id => {
  if (startsWith(id, 'HP:')) {
    return `${urls.HPO_URL}/hpoweb/showterm?id=${id}`
  } else {
    const hpoId = padStart(id, 7, '0')
    return `${urls.HPO_URL}/hpoweb/showterm?id=HP:${hpoId}`
  }
}

export const orphanetEntry = id => `${urls.ORPHANET_URL}/consor/cgi-bin/OC_Exp.php?Lng=EN&Expert=${id}`

// Internal Resources
export const alamutEntry = cdna => `${urls.ALAMUT_URL}/show?request=${cdna}`

// ClinGen urls
export const clinGenHGNCGene = hgncId => `${urls.CLINGEN_URL}/genes/HGNC:${hgncId}`
export const clinGenCondition = mondoId => `${urls.CLINGEN_URL}/conditions/MONDO_${mondoId}`
