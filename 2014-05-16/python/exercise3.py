"""
funzione che automatizza il processo di "merging-numbering-elimination" dei blocchi
in modo da rendere possibile l'esecuzione di seguenze multiple di merge e remove.

"""

def removeCD(diagram,toRemove):
	V,CV = diagram
	return V,[cell for k,cell in enumerate(CV) if not (k in toRemove)]


#evito problemi sulla numerazione scorrendo la lista al contrario
def mergeCD(master,toMerge,diagrams):
	V,CV = master
	for i in list(reversed(range(len(CV)))):
		if i in toMerge:
			j = toMerge.index(i)
			master = diagram2cell(diagrams[j],master,toMerge[j])
	return master

def mergeRemoveC(master,diagrams,toMerge,toRemove):
	
	if (len(diagrams) == len(toMerge)):
		
		if(len(toMerge)>0 and len(toRemove)>0):
			
			for i in range(len(toMerge)):
				for j in toRemove:
					if (j < toMerge[i]):
						toMerge[i]

	master = removeCD(master,toRemove)
	master = mergeCD(master,toMerge,diagrams)
	return master

