import * as urls from '../constants/genomics-urls'
import * as urlBuilders from './urlBuilders'


describe('Test URL Builders', () => {
  const chr = '1'
  const pos = 10
  const ref = 'A'
  const alt = 'T'
  const cdna = 'cDNA-1'
  const gene = 'MFN2'

  it('Build NCBI efetch url', () => {
    const observed = urlBuilders.efetch('db1', 1)
    const expected = `${urls.NCBI_EFETCH_ENDPOINT}?retmode=xml&db=db1&id=1&`
    expect(observed).toEqual(expected)
  })

  it('Build NCBI efetch url w/ retmode', () => {
    const observed = urlBuilders.efetch('db1', 1, 'json')
    const expected = `${urls.NCBI_EFETCH_ENDPOINT}?retmode=json&db=db1&id=1&`
    expect(observed).toEqual(expected)
  })

  it('Build NCBI efetch url w/ param', () => {
    const observed = urlBuilders.efetch('db1', 1, 'json', 'hi=mike')
    const expected = `${urls.NCBI_EFETCH_ENDPOINT}?retmode=json&db=db1&id=1&hi=mike`
    expect(observed).toEqual(expected)
  })

  it('Build NCBI esummary url', () => {
    const observed = urlBuilders.esummary('db1', 1)
    const expected = `${urls.NCBI_ESUMMARY_ENDPOINT}?retmode=json&db=db1&id=1&`
    expect(observed).toEqual(expected)
  })

  it('Build NCBI esummary url w/ retmode', () => {
    const observed = urlBuilders.esummary('db1', 1, 'xml')
    const expected = `${urls.NCBI_ESUMMARY_ENDPOINT}?retmode=xml&db=db1&id=1&`
    expect(observed).toEqual(expected)
  })

  it('Build NCBI esummary url w/ params', () => {
    const observed = urlBuilders.esummary('db1', 1, 'xml', 'params')
    const expected = `${urls.NCBI_ESUMMARY_ENDPOINT}?retmode=xml&db=db1&id=1&params`
    expect(observed).toEqual(expected)
  })

  it('Build NCBI esearch url', () => {
    const observed = urlBuilders.esearch('db1', 'term')
    const expected = `${urls.NCBI_ESEARCH_ENDPOINT}?retmode=json&db=db1&term=term&`
    expect(observed).toEqual(expected)
  })

  it('Build NCBI esearch url w/ retmode', () => {
    const observed = urlBuilders.esearch('db1', 'term', 'xml')
    const expected = `${urls.NCBI_ESEARCH_ENDPOINT}?retmode=xml&db=db1&term=term&`
    expect(observed).toEqual(expected)
  })

  it('Build NCBI esearch url w/ params', () => {
    const observed = urlBuilders.esearch('db1', 'term', 'xml', 'filters')
    const expected = `${urls.NCBI_ESEARCH_ENDPOINT}?retmode=xml&db=db1&term=term&filters`
    expect(observed).toEqual(expected)
  })

  it('Build URL to search PubMed', () => {
    const observed = urlBuilders.pubmedSearch('term')
    const expected = `${urls.PUBMED_URL}/?term=term`
    expect(observed).toEqual(expected)
  })

  it('Build URL to PubMed entry', () => {
    const observed = urlBuilders.pubmedEntry('id')
    const expected = `${urls.PUBMED_URL}/id`
    expect(observed).toEqual(expected)
  })

  it('Build URL to NCBI Variation Viewer entry', () => {
    const observed = urlBuilders.variationViewer(chr, pos, pos)
    const expected = `${urls.NCBI_VARIATION_URL}/?assm=GCF_000001405.25&chr=1&from=10&to=10`
    expect(observed).toEqual(expected)
  })

  it('Build URL to search ClinVar', () => {
    const observed = urlBuilders.clinvarSearch('term')
    const expected = `${urls.CLINVAR_URL}/?term=term`
    expect(observed).toEqual(expected)
  })

  it('Build URL to ClinVar Entry', () => {
    const observed = urlBuilders.clinvarEntry('id1')
    const expected = `${urls.CLINVAR_URL}/id1`
    expect(observed).toEqual(expected)
  })

  it('Build URL to COSMIC Entry w/o trimmed Id', () => {
    const observed = urlBuilders.cosmicEntry('COSM1234')
    const expected = `${urls.COSMIC_URL}/mutation/overview?id=1234`
    expect(observed).toEqual(expected)
  })

  it('Build URL to COSMIC Entry w/ trimmed Id', () => {
    const observed = urlBuilders.cosmicEntry('999')
    const expected = `${urls.COSMIC_URL}/mutation/overview?id=999`
    expect(observed).toEqual(expected)
  })

  it('Build URL to a locus in Ensembl w/ defaults', () => {
    const observed = urlBuilders.ensemblLocus(chr, pos, pos)
    const expected = `${urls.ENSEMBL_GRCH37_URL}/Homo_sapiens/Location/View?db=core;r=1:10-10`
    expect(observed).toEqual(expected)
  })

  it('Build URL to a locus in Ensembl w/ new species and hg19', () => {
    const observed = urlBuilders.ensemblLocus(chr, pos, pos, 'hg19', 'Homo_sapiens2')
    const expected = `${urls.ENSEMBL_GRCH37_URL}/Homo_sapiens2/Location/View?db=core;r=1:10-10`
    expect(observed).toEqual(expected)
  })

  it('Build URL to a locus in Ensembl w/ new species and hg19', () => {
    const observed = urlBuilders.ensemblLocus(chr, pos, pos, 'hg38', 'Homo_sapiens2')
    const expected = `${urls.ENSEMBL_GRCH38_URL}/Homo_sapiens2/Location/View?db=core;r=1:10-10`
    expect(observed).toEqual(expected)
  })

  it('Raise error for not supported reference for Ensembl', () => {
    expect(() => urlBuilders.ensemblLocus(chr, pos, pos, 'werid', 'Homo_sapiens2')).toThrow()
  })

  it('Build URL to a variant in ExAC', () => {
    const observed = urlBuilders.exacVariant(chr, pos, ref, alt)
    const expected = `${urls.EXAC_URL}/variant/1-10-A-T`
    expect(observed).toEqual(expected)
  })

  it('Build URL to a variant in gnomAD', () => {
    const observed = urlBuilders.gnomadVariant(chr, pos, ref, alt)
    const expected = `${urls.GNOMAD_URL}/variant/1-10-A-T`
    expect(observed).toEqual(expected)
  })

  it('Build URL to a locus in UCSC', () => {
    const observed = urlBuilders.ucscLocus(chr, pos, pos)
    const expected = `${urls.UCSC_URL}/cgi-bin/hgTracks?db=hg19&position=chr1:10-10`
    expect(observed).toEqual(expected)
  })

  it('Build URL to a locus in UCSC w/ genome', () => {
    const observed = urlBuilders.ucscLocus(chr, pos, pos, 'hg38')
    const expected = `${urls.UCSC_URL}/cgi-bin/hgTracks?db=hg38&position=chr1:10-10`
    expect(observed).toEqual(expected)
  })

  it('Build URL to GeneCards entry', () => {
    const observed = urlBuilders.geneCardsEntry(gene)
    const expected = `${urls.GENE_CARDS_URL}/cgi-bin/carddisp.pl?gene=MFN2`
    expect(observed).toEqual(expected)
  })

  it('Build URL to NCBI Genetics Home Resource entry', () => {
    const observed = urlBuilders.ghrEntry(gene)
    const expected = `${urls.GHR_URL}/gene/MFN2`
    expect(observed).toEqual(expected)
  })

  it('Build URL to HGNC entry', () => {
    const observed = urlBuilders.hgncEntry(gene)
    const expected = `${urls.HGNC_URL}/cgi-bin/search?search_type=all&search=MFN2`
    expect(observed).toEqual(expected)
  })

  it('Build URL to a variant in DECIPHER', () => {
    const observed = urlBuilders.decipherVariant(chr, pos, pos)
    const expected = `${urls.DECIPHER_URL}/search?q=1:10-10#consented-patients/results`
    expect(observed).toEqual(expected)
  })

  it('Build URL to a variant in HGMD', () => {
    const observed = urlBuilders.hgmdVariant(cdna)
    const expected = `${urls.HGMD_URL}/hgmd/pro/mut.php?acc=cDNA-1`
    expect(observed).toEqual(expected)
  })

  it('Build URL to a gene in HGMD', () => {
    const observed = urlBuilders.hgmdGene(gene)
    const expected = `${urls.HGMD_URL}/hgmd/pro/gene.php?gene=MFN2`
    expect(observed).toEqual(expected)
  })

  it('Build URL to OMIM entry', () => {
    const observed = urlBuilders.omimEntry('id10')
    const expected = `${urls.OMIM_URL}/entry/id10`
    expect(observed).toEqual(expected)
  })

  it('Build URL to search OMIM', () => {
    const observed = urlBuilders.omimSearch('search')
    const expected = `${urls.OMIM_URL}/search/?index=entry&search=search`
    expect(observed).toEqual(expected)
  })

  it('Build URL to HPO entry', () => {
    const observed = urlBuilders.hpoEntry('HP:001')
    const expected = `${urls.HPO_URL}/hpoweb/showterm?id=HP:001`
    expect(observed).toEqual(expected)
  })

  it('Build URL to HPO entry w/ padding', () => {
    const observed = urlBuilders.hpoEntry('1')
    const expected = `${urls.HPO_URL}/hpoweb/showterm?id=HP:0000001`
    expect(observed).toEqual(expected)
  })

  it('Build URL to Orphanent entry', () => {
    const observed = urlBuilders.orphanetEntry('id1')
    const expected = `${urls.ORPHANET_URL}/consor/cgi-bin/OC_Exp.php?Lng=EN&Expert=id1`
    expect(observed).toEqual(expected)
  })

  it('Build URL to Alamut entry', () => {
    const observed = urlBuilders.alamutEntry(cdna)
    const expected = `${urls.ALAMUT_URL}/show?request=cDNA-1`
    expect(observed).toEqual(expected)
  })
})
