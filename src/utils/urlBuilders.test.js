import * as urls from '../constants/genomics-urls'
import { utils } from '../index'

describe('Test URL Builders', () => {
  const chr = '1'
  const pos = 10
  const ref = 'A'
  const alt = 'T'
  const cdna = 'cDNA-1'
  const gene = 'MFN2'

  it('Build NCBI efetch url', () => {
    const observed = utils.urlBuilders.efetch('db1', 1)
    const expected = `${urls.NCBI_EFETCH_ENDPOINT}?retmode=xml&db=db1&id=1&`
    expect(observed).toEqual(expected)
  })

  it('Build NCBI efetch url w/ retmode', () => {
    const observed = utils.urlBuilders.efetch('db1', 1, 'json')
    const expected = `${urls.NCBI_EFETCH_ENDPOINT}?retmode=json&db=db1&id=1&`
    expect(observed).toEqual(expected)
  })

  it('Build NCBI efetch url w/ param', () => {
    const observed = utils.urlBuilders.efetch('db1', 1, 'json', 'hi=mike')
    const expected = `${urls.NCBI_EFETCH_ENDPOINT}?retmode=json&db=db1&id=1&hi=mike`
    expect(observed).toEqual(expected)
  })

  it('Build NCBI esummary url', () => {
    const observed = utils.urlBuilders.esummary('db1', 1)
    const expected = `${urls.NCBI_ESUMMARY_ENDPOINT}?retmode=json&db=db1&id=1&`
    expect(observed).toEqual(expected)
  })

  it('Build NCBI esummary url w/ retmode', () => {
    const observed = utils.urlBuilders.esummary('db1', 1, 'xml')
    const expected = `${urls.NCBI_ESUMMARY_ENDPOINT}?retmode=xml&db=db1&id=1&`
    expect(observed).toEqual(expected)
  })

  it('Build NCBI esummary url w/ params', () => {
    const observed = utils.urlBuilders.esummary('db1', 1, 'xml', 'params')
    const expected = `${urls.NCBI_ESUMMARY_ENDPOINT}?retmode=xml&db=db1&id=1&params`
    expect(observed).toEqual(expected)
  })

  it('Build NCBI esearch url', () => {
    const observed = utils.urlBuilders.esearch('db1', 'term')
    const expected = `${urls.NCBI_ESEARCH_ENDPOINT}?retmode=json&db=db1&term=term&`
    expect(observed).toEqual(expected)
  })

  it('Build NCBI esearch url w/ retmode', () => {
    const observed = utils.urlBuilders.esearch('db1', 'term', 'xml')
    const expected = `${urls.NCBI_ESEARCH_ENDPOINT}?retmode=xml&db=db1&term=term&`
    expect(observed).toEqual(expected)
  })

  it('Build NCBI esearch url w/ params', () => {
    const observed = utils.urlBuilders.esearch('db1', 'term', 'xml', 'filters')
    const expected = `${urls.NCBI_ESEARCH_ENDPOINT}?retmode=xml&db=db1&term=term&filters`
    expect(observed).toEqual(expected)
  })

  it('Build URL to search PubMed', () => {
    const observed = utils.urlBuilders.pubmedSearch('term')
    const expected = `${urls.PUBMED_URL}/?term=term`
    expect(observed).toEqual(expected)
  })

  it('Build URL to PubMed entry', () => {
    const observed = utils.urlBuilders.pubmedEntry('id')
    const expected = `${urls.PUBMED_URL}/id`
    expect(observed).toEqual(expected)
  })

  it('Build URL to NCBI Variation Viewer entry', () => {
    const observed = utils.urlBuilders.variationViewer(chr, pos, pos)
    const expected = `${urls.NCBI_VARIATION_URL}/?assm=GCF_000001405.25&chr=1&from=10&to=10`
    expect(observed).toEqual(expected)
  })

  it('Build URL to search ClinVar', () => {
    const observed = utils.urlBuilders.clinvarSearch('term')
    const expected = `${urls.CLINVAR_URL}/?term=term`
    expect(observed).toEqual(expected)
  })

  it('Build URL to ClinVar Entry', () => {
    const observed = utils.urlBuilders.clinvarEntry('id1')
    const expected = `${urls.CLINVAR_URL}/variation/id1`
    expect(observed).toEqual(expected)
  })

  it('Build URL to COSMIC Entry w/o trimmed Id', () => {
    const observed = utils.urlBuilders.cosmicEntry('COSM1234')
    const expected = `${urls.COSMIC_URL}/mutation/overview?id=1234`
    expect(observed).toEqual(expected)
  })

  it('Build URL to COSMIC Entry w/ trimmed Id', () => {
    const observed = utils.urlBuilders.cosmicEntry('999')
    const expected = `${urls.COSMIC_URL}/mutation/overview?id=999`
    expect(observed).toEqual(expected)
  })

  it('Build URL to a locus in Ensembl w/ defaults', () => {
    const observed = utils.urlBuilders.ensemblLocus(chr, pos, pos)
    const expected = `${urls.ENSEMBL_GRCH37_URL}/Homo_sapiens/Location/View?db=core;r=1:10-10`
    expect(observed).toEqual(expected)
  })

  it('Build URL to a locus in Ensembl w/ new species and hg19', () => {
    const observed = utils.urlBuilders.ensemblLocus(chr, pos, pos, 'hg19', 'Homo_sapiens2')
    const expected = `${urls.ENSEMBL_GRCH37_URL}/Homo_sapiens2/Location/View?db=core;r=1:10-10`
    expect(observed).toEqual(expected)
  })

  it('Build URL to a locus in Ensembl w/ new species and hg19', () => {
    const observed = utils.urlBuilders.ensemblLocus(chr, pos, pos, 'hg38', 'Homo_sapiens2')
    const expected = `${urls.ENSEMBL_GRCH38_URL}/Homo_sapiens2/Location/View?db=core;r=1:10-10`
    expect(observed).toEqual(expected)
  })

  it('Raise error for not supported reference for Ensembl', () => {
    expect(() => utils.urlBuilders.ensemblLocus(chr, pos, pos, 'werid', 'Homo_sapiens2')).toThrow()
  })

  it('Build URL to a variant in ExAC', () => {
    const observed = utils.urlBuilders.exacVariant(chr, pos, ref, alt)
    const expected = `${urls.EXAC_URL}/variant/1-10-A-T`
    expect(observed).toEqual(expected)
  })

  it('Build URL to a variant in gnomAD', () => {
    const observed = utils.urlBuilders.gnomadVariant(chr, pos, ref, alt)
    const expected = `${urls.GNOMAD_URL}/variant/1-10-A-T`
    expect(observed).toEqual(expected)
  })

  it('Build URL to a locus in UCSC', () => {
    const observed = utils.urlBuilders.ucscLocus(chr, pos, pos)
    const expected = `${urls.UCSC_URL}/cgi-bin/hgTracks?db=hg19&position=chr1:10-10`
    expect(observed).toEqual(expected)
  })

  it('Build URL to a locus in UCSC w/ genome', () => {
    const observed = utils.urlBuilders.ucscLocus(chr, pos, pos, 'hg38')
    const expected = `${urls.UCSC_URL}/cgi-bin/hgTracks?db=hg38&position=chr1:10-10`
    expect(observed).toEqual(expected)
  })

  it('Build URL to a locus in DGV', () => {
    const observed = utils.urlBuilders.dgvRegionSearch(chr, pos, pos)
    const expected = `${urls.DGV_URL}/gb2/gbrowse/dgv2_hg19/?name=chr${chr}:${pos}-${pos};search=Search`
    expect(observed).toEqual(expected)
  })

  it('Build URL to GeneCards entry', () => {
    const observed = utils.urlBuilders.geneCardsEntry(gene)
    const expected = `${urls.GENE_CARDS_URL}/cgi-bin/carddisp.pl?gene=MFN2`
    expect(observed).toEqual(expected)
  })

  it('Build URL to NCBI Genetics Home Resource entry', () => {
    const observed = utils.urlBuilders.ghrEntry(gene)
    const expected = `${urls.GHR_URL}/gene/MFN2`
    expect(observed).toEqual(expected)
  })

  it('Build URL to HGNC entry', () => {
    const observed = utils.urlBuilders.hgncEntry(gene)
    const expected = `${urls.HGNC_URL}/cgi-bin/search?search_type=all&search=MFN2`
    expect(observed).toEqual(expected)
  })

  it('Build URL to Gene Reviews entry', () => {
    const observed = utils.urlBuilders.geneReviewsEntry(gene)
    const expected = `${urls.GENEREVIEWS_URL}/?term=MFN2`
    expect(observed).toEqual(expected)
  })

  it('Build URL to GTEx entry', () => {
    const observed = utils.urlBuilders.gtexEntry(gene)
    const expected = `${urls.GTEX_URL}/home/gene/MFN2`
    expect(observed).toEqual(expected)
  })

  it('Build URL to ExAC Gene entry', () => {
    const observed = utils.urlBuilders.exacGeneEntry(gene)
    const expected = `${urls.EXAC_URL}/gene/MFN2`
    expect(observed).toEqual(expected)
  })

  it('Build URL to ExAC Gene entry', () => {
    const observed = utils.urlBuilders.gnomadGeneEntry(gene)
    const expected = `${urls.GNOMAD_URL}/gene/MFN2`
    expect(observed).toEqual(expected)
  })

  it('Build URL to a variant in DECIPHER', () => {
    const observed = utils.urlBuilders.decipherVariant(chr, pos, pos)
    const expected = `${urls.DECIPHER_URL}/search?q=1:10-10#consented-patients/results`
    expect(observed).toEqual(expected)
  })

  it('Build URL to a region in DECIPHER', () => {
    const observed = utils.urlBuilders.decipherRegionSearch(chr, pos, pos)
    const expected = `${urls.DECIPHER_URL}/search?q=chr${chr}:${pos}-${pos}#consented-patients/results`
    expect(observed).toEqual(expected)
  })

  it('Build URL to a variant in HGMD', () => {
    const observed = utils.urlBuilders.hgmdVariant(cdna)
    const expected = `${urls.HGMD_URL}/hgmd/pro/mut.php?acc=cDNA-1`
    expect(observed).toEqual(expected)
  })

  it('Build URL to a gene in HGMD', () => {
    const observed = utils.urlBuilders.hgmdGene(gene)
    const expected = `${urls.HGMD_URL}/hgmd/pro/gene.php?gene=MFN2`
    expect(observed).toEqual(expected)
  })

  it('Build URL to OMIM entry', () => {
    const observed = utils.urlBuilders.omimEntry('id10')
    const expected = `${urls.OMIM_URL}/entry/id10`
    expect(observed).toEqual(expected)
  })

  it('Build URL to search OMIM', () => {
    const observed = utils.urlBuilders.omimSearch('search')
    const expected = `${urls.OMIM_URL}/search/?index=entry&search=search`
    expect(observed).toEqual(expected)
  })

  it('Build URL to HPO entry', () => {
    const observed = utils.urlBuilders.hpoEntry('HP:001')
    const expected = `${urls.HPO_URL}/hpoweb/showterm?id=HP:001`
    expect(observed).toEqual(expected)
  })

  it('Build URL to HPO entry w/ padding', () => {
    const observed = utils.urlBuilders.hpoEntry('1')
    const expected = `${urls.HPO_URL}/hpoweb/showterm?id=HP:0000001`
    expect(observed).toEqual(expected)
  })

  it('Build URL to Orphanent entry', () => {
    const observed = utils.urlBuilders.orphanetEntry('id1')
    const expected = `${urls.ORPHANET_URL}/consor/cgi-bin/OC_Exp.php?Lng=EN&Expert=id1`
    expect(observed).toEqual(expected)
  })

  it('Build URL to Alamut entry', () => {
    const observed = utils.urlBuilders.alamutEntry(cdna)
    const expected = `${urls.ALAMUT_URL}/show?request=cDNA-1`
    expect(observed).toEqual(expected)
  })

  it('Build URL to ClinGen Gene entry', () => {
    const observed = utils.urlBuilders.clinGenHGNCGene(1234)
    const expected = `${urls.CLINGEN_URL}/genes/HGNC:1234`
    expect(observed).toEqual(expected)
  })

  it('Build URL to ClinGen Disease entry', () => {
    const observed = utils.urlBuilders.clinGenCondition(1234)
    const expected = `${urls.CLINGEN_URL}/conditions/MONDO_1234`
    expect(observed).toEqual(expected)
  })

  it('Build URL to Mouse Genome Database entry', () => {
    const observed = utils.urlBuilders.mgiGene(gene)
    const expected = 'http://www.informatics.jax.org//searchtool/Search.do?query=MFN2'
    expect(observed).toEqual(expected)
  })
})
