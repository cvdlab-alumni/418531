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
pareti=.3
altezza=2.7
sizeWindow=0.6
heightWindow=1
heightDoor=2
pavimentazione = 0.01

master = assemblyDiagramInit([5,5,2])([[pareti,10,pareti,20,pareti],[pareti,15,pareti,15,pareti],[pareti,altezza]])
corridiostanza = assemblyDiagramInit([1,3,2])([[20],[10,pareti,5],[pavimentazione,altezza]])
cuBca = assemblyDiagramInit([5,1,2])([[5,pareti,5,pareti,10],[15],[pavimentazione,altezza]])
dividi = assemblyDiagramInit([2,1,2])([[10.6,10],[pareti],[pavimentazione,altezza]])
corridoio = assemblyDiagramInit([3,1,2])([[10.3,pareti,10],[pareti],[pavimentazione,altezza]])


windows1=assemblyDiagramInit([5,1,3])([[4.2,sizeWindow,pareti,sizeWindow,4.2],[pareti],[1,heightWindow,0.7]])
windows2=assemblyDiagramInit([11,1,3])([[1.5,sizeWindow,pareti,sizeWindow,1.5,1.5,sizeWindow,pareti,sizeWindow,1.5,11],[pareti],[1,heightWindow,0.7]])
windows3=assemblyDiagramInit([1,5,3])([[pareti],[13.5,sizeWindow,pareti,sizeWindow,5],[1,heightWindow,0.7]])
windows4=assemblyDiagramInit([1,5,3])([[pareti],[4.2,sizeWindow,pareti,sizeWindow,9.3],[1,heightWindow,0.7]])
windows5=assemblyDiagramInit([9,1,3])([[6.5,sizeWindow,pareti,sizeWindow,4,sizeWindow,pareti,sizeWindow,6.5],[pareti],[1,heightWindow,0.7]])

door=assemblyDiagramInit([1,3,2])([[pareti],[8,sizeWindow*3,5.2],[heightDoor,altezza - heightDoor ]])
door1=assemblyDiagramInit([3,1,2])([[4.4,sizeWindow*2,4.4],[pareti ],[heightDoor,altezza - heightDoor ]])
door2=assemblyDiagramInit([1,3,2])([[pareti],[3,sizeWindow*2,10.8],[heightDoor,altezza - heightDoor ]])
door3=assemblyDiagramInit([1,3,2])([[pareti],[16,sizeWindow*2,2.5],[heightDoor,altezza - heightDoor ]])
door5=assemblyDiagramInit([1,3,2])([[pareti],[1.3,sizeWindow*2,1.2],[heightDoor,altezza - heightDoor ]])
door4=assemblyDiagramInit([3,1,2])([[6.8,sizeWindow*2,2.4],[pareti ],[heightDoor,altezza - heightDoor ]])
door6=assemblyDiagramInit([3,1,2])([[4.5,sizeWindow*2,14],[pareti ],[heightDoor,altezza - heightDoor ]])


"""
def buildStair(complete,cell,diagram):
	complete = diagram2cell(diagram,complete,cell)
	hpc = SKEL_1(STRUCT(MKPOLS(complete)))
	hpc = cellNumbering (complete,hpc)(range(len(complete[1])),RED,2)
	#VIEW(hpc)
	return hpc
"""

V,CV = master
hpc = SKEL_1(STRUCT(MKPOLS(master)))


toMerge = 33
master = diagram2cell(corridiostanza,master,toMerge)


toMerge = 36
master = diagram2cell(cuBca,master,toMerge)

toMerge = 34
master = diagram2cell(dividi,master,toMerge)


toRemove = [66]
master = master[0], [cell for k,cell in enumerate(master[1]) if not (k in toRemove)]


toMerge = 52
master = diagram2cell(corridoio,master,toMerge)


#windows1

toMerge = 19
master = diagram2cell(windows1,master,toMerge)

#windows 2
toMerge = 35
master = diagram2cell(windows2,master,toMerge)

#windows 3
toMerge = 42
master = diagram2cell(windows3,master,toMerge)

#windows 4
toMerge = 38
master = diagram2cell(windows4,master,toMerge)


"""
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),RED,2)
VIEW(hpc)
"""

#door
toMerge = 3
master = diagram2cell(door,master,toMerge)

#door2
toMerge = 25
master = diagram2cell(door2,master,toMerge)

#door1
toMerge = 14
master = diagram2cell(door1,master,toMerge)

#door3
toMerge = 20
master = diagram2cell(door3,master,toMerge)

#door5
toMerge = 60
master = diagram2cell(door5,master,toMerge)


#door4
toMerge = 55
master = diagram2cell(door4,master,toMerge)

#door6
toMerge = 42
master = diagram2cell(door6,master,toMerge)

#windos 5
toMerge = 26
master = diagram2cell(windows5,master,toMerge)


#visualizza
V,CV = master
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),RED,2)
VIEW(hpc)


toRemove = [39,12,58,55,51,47,43,15,139,151,157,145,63,69,169,78,84,93,99,117,111,163,175,132,126,183,189,195,201]
master = V,[cell for k,cell in enumerate(CV) if not (k in toRemove)]
DRAW(master)
