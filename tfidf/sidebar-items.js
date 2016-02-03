initSidebarItems({"mod":[["idf","Implementations of different weighting schemes for inverse document frequency (IDF). For more information about which ones are implemented, check the Wiki link in the crate description."],["tf","Implementations of different weighting schemes for term frequency (tf). For more information about which ones are implemented, check the Wiki link in the crate description."]],"struct":[["TfIdfDefault","Default scheme for calculating tf-idf."]],"trait":[["Document","A body of terms."],["ExpandableDocument","A document that can be expanded to a collection of terms."],["NaiveDocument","A naive document with a simple function stating whether or not a term exists in the document or not. The document is naive , which means the frequencies of each term has yet to be determined. This type of document is useful for only some TF weighting schemes."],["NormalizationFactor","A strategy that uses a normalization factor."],["ProcessedDocument","A document where the frequencies of each term is already calculated."],["SmoothingFactor","A strategy that uses a smoothing factor."],["Tf","A strategy to calculate a weighted or unweighted term frequency (tf) score of a term from a document."],["TfIdf","Trait to create a strategy to calculate a tf-idf."]]});