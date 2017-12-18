PublicEvidenceCell
------------------

Component to render a table cell that provides a quick snap shot of how much information in the public domain exists.  Will provide links to the commonly used resources:

+ HGMD
+ COSMIC
+ ClinVar
+ gnomAD

### Prop Types

| Property | Type | Required? | Default | Description |
|:---|:---|:---:|:---|:---|
| chromosome | String | ✓ |  | Chromosome |
| position | Number | ✓ |  | Coordinate in genome |
| reference | String | ✓ |  | Reference allele |
| alternate | String | ✓ |  | Alternate allele |
| cosmicId | String |  |  | COSMIC Id |
| hgmdId | String |  |  | HGMD Id |
| clinvarId | String |  |  | ClinVar Allele Id |
| gnomadFrequency | Number |  |  | gnomAD Allele Frequency (AF) |
| rowIndex | Number |  |  | Row number |
| as | String or Element |  |  | Can render as div or td |
