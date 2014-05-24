from pyplasm import *
from scipy import *
import os,sys
""" import modules from larcc/lib """
sys.path.insert(0, '/home/ale/Scrivania/lar-cc/lib/py/')
from lar2psm import *
from simplexn import *
from larcc import *
from largrid import *
from mapper import *
from boolean import *
from splines import *
from sysml import *
from architectural import *

DRAW = COMP([VIEW,STRUCT,MKPOLS])


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
				actual=toMerge[i]#senza actual nell iterazione seguente toMerge[i] si aggiorna e non viene scalato correttamente in alcune iterazioni
				for j in toRemove:
					#vado ad aggiornare i valori del merge se minori di quelli del remove
					if (j <= actual):
						print j 
						print toMerge[i]
						toMerge[i]=toMerge[i]-1

	master = removeCD(master,toRemove)
	V,CV = master
	hpc = SKEL_1(STRUCT(MKPOLS(master)))
	hpc = cellNumbering (master,hpc)(range(len(master[1])),RED,3)
	VIEW(hpc)
	master = mergeCD(master,toMerge,diagrams)
	return master

#TESTING
master = assemblyDiagramInit([5,5,2])([[.3,3.2,.1,5,.3],[.3,4,.1,2.9,.3],[.3,2.7]])
diagram1 = assemblyDiagramInit([3,1,2])([[2,1,2],[.3],[2.2,.5]])
diagram2 = assemblyDiagramInit([5,1,3])([[1.5,0.9,.2,.9,1.5],[.3],[1,1.4,.3]])
V,CV = master
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),RED,3)
VIEW(hpc)
toRemove = [13,33,17,37]
toMerge =[31,39]
diagrams=[diagram1,diagram2]
master = mergeRemoveC(master, diagrams, toMerge, toRemove)
V,CV = master
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),RED,3)
VIEW(hpc)
DRAW(master)