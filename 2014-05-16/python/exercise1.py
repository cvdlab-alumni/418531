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

def FindCornici(pf,rangeCornici):
	out=[]
	for i in range(len(pf)):
		if(pf[i] in rangeCornici):
			rangeCornici.remove(pf[i])
	return rangeCornici

def rgb(color):
	return [color[0]/255.0, color[1]/255.0, color[2]/255.0]

def trasparente(x):
	return MATERIAL([1,1,1,0.1, 0,0,0.8,0.5, 1,1,1,0.1, 1,1,1,0.1, 100])(x)

colorCornice=rgb([149,92,62])


DRAW = COMP([VIEW,STRUCT,MKPOLS])
pareti=.3
altezza=2.7
muretto = 1.3
sizeWindow=0.6
heightWindow=1
heightDoor=2
floor = 0.3
doorSize=1.2
cornice=0.1


master = assemblyDiagramInit([7,7,2])([[pareti,10,pareti,7,pareti,20,pareti],[pareti,12,pareti,20,pareti,10,pareti],[floor,altezza]])
CucinaSalone = assemblyDiagramInit([1,2,1])([[pareti],[3.7,11.2],[altezza]])
BagnoIngresso = assemblyDiagramInit([1,2,1])([[pareti],[3.4,11.5],[altezza]])
corridoio= assemblyDiagramInit([1,3,1])([[13],[3.5,pareti,11.5],[altezza]])
corridoio2= assemblyDiagramInit([1,3,1])([[8],[3.5,pareti,11.5],[altezza]])
Bagno= assemblyDiagramInit([3,1,1])([[8,pareti,11.7],[20],[altezza]])

door=assemblyDiagramInit([1,3,2])([[pareti],[4,doorSize,5.6],[heightDoor,altezza - heightDoor ]])
door1=assemblyDiagramInit([1,3,2])([[pareti],[2,doorSize,2],[heightDoor,altezza - heightDoor ]])
door2=assemblyDiagramInit([3,1,2])([[2.9,doorSize,2.9],[pareti],[heightDoor,altezza - heightDoor ]])
door3=assemblyDiagramInit([3,1,2])([[3,doorSize,15.8],[pareti],[heightDoor,altezza - heightDoor ]])
door4=assemblyDiagramInit([3,1,2])([[3.4,doorSize,3.4],[pareti],[heightDoor,altezza - heightDoor ]])
door5=assemblyDiagramInit([1,3,2])([[pareti],[1.5,doorSize,1.5],[heightDoor,altezza - heightDoor ]])

Windoor1=assemblyDiagramInit([3,1,2])([[2,doorSize*2,6],[pareti],[heightDoor,altezza - heightDoor ]])
window1=assemblyDiagramInit([3,1,2])([[pareti,sizeWindow*5,2.6],[pareti],[1.1,heightWindow]])
Windoor2=assemblyDiagramInit([3,1,2])([[11,doorSize*2,7.5],[pareti],[heightDoor,altezza - heightDoor ]])
window2=assemblyDiagramInit([3,1,2])([[pareti,sizeWindow*5,6.4],[pareti],[0.9,heightWindow]])
window3=assemblyDiagramInit([1,3,3])([[pareti],[12.5,sizeWindow*5,4.5],[1,heightWindow,0.7]])
window4=assemblyDiagramInit([3,1,3])([[8,sizeWindow*5,8],[pareti],[1,heightWindow,0.7]])

terrazzox=assemblyDiagramInit([1,1,2])([[pareti],[pareti],[1,1.7]])


##cucinaSalone
toMerge = 35
master = diagram2cell(CucinaSalone,master,toMerge)
##cucinaSalone
toMerge = 62
master = diagram2cell(BagnoIngresso,master,toMerge)
##cucinaSalone
toMerge = 48
master = diagram2cell(corridoio,master,toMerge)
##bagno
toMerge = 74
master = diagram2cell(Bagno,master,toMerge)
##corridoio
toMerge = 101
master = diagram2cell(corridoio2,master,toMerge)
toMerge = 101
master = diagram2cell(CucinaSalone,master,toMerge)

#Porta principale
toMerge = 3
master = diagram2cell(door,master,toMerge)
#Porta 1
toMerge = 93
master = diagram2cell(door1,master,toMerge)
#porta2
toMerge = 45
master = diagram2cell(door2,master,toMerge)
#porta3
toMerge = 70
master = diagram2cell(door3,master,toMerge)
#porta4
toMerge = 99
master = diagram2cell(door4,master,toMerge)
#porta5
toMerge = 100
master = diagram2cell(door5,master,toMerge)

#windoor
toMerge = 22
master = diagram2cell(Windoor1,master,toMerge)
#window1
toMerge = 140
master = diagram2cell(window1,master,toMerge)
#windoor2
toMerge = 71
master = diagram2cell(Windoor2,master,toMerge)
#window2
toMerge = 150
master = diagram2cell(window2,master,toMerge)
#window3
toMerge = 82
master = diagram2cell(window3,master,toMerge)
#window4
toMerge = 65
master = diagram2cell(window4,master,toMerge)

#terrazzo
master = diagram2cell(terrazzox,master,toMerge)
toMerge = 25
master = diagram2cell(terrazzox,master,toMerge)
toMerge = 49
master = diagram2cell(terrazzox,master,toMerge)
toMerge = 70
master = diagram2cell(terrazzox,master,toMerge)
toMerge = 80
master = diagram2cell(terrazzox,master,toMerge)

#travi
toMerge = 81
master = diagram2cell(terrazzox,master,toMerge)
toMerge = 61
master = diagram2cell(terrazzox,master,toMerge)
toMerge = 37
master = diagram2cell(terrazzox,master,toMerge)


V,CV = master
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),RED,3)
VIEW(hpc)

#finestre dettaglio
finestraDettaglioY=assemblyDiagramInit([1,5,3])([[pareti],[cornice,sizeWindow,cornice,sizeWindow,cornice],[0.2,sizeWindow*2-0.4,0.2]])
finestraDettaglioX=assemblyDiagramInit([5,1,3])([[cornice,sizeWindow,cornice,sizeWindow,cornice],[pareti],[0.2,sizeWindow*2-0.4,0.2]])
PortafinestraDettaglio=assemblyDiagramInit([5,1,3])([[cornice,sizeWindow,cornice,sizeWindow,cornice],[pareti],[0.2,heightDoor-0.4,0.2]])

toMerge = 160
master = diagram2cell(finestraDettaglioX,master,toMerge)
toMerge = 144
master = diagram2cell(finestraDettaglioX,master,toMerge)
toMerge = 138
master = diagram2cell(PortafinestraDettaglio,master,toMerge)
toMerge = 133
master = diagram2cell(finestraDettaglioX,master,toMerge)
toMerge = 127
master = diagram2cell(PortafinestraDettaglio,master,toMerge)
toMerge = 147
master = diagram2cell(finestraDettaglioY,master,toMerge)

#porte dettaglio

porteDettaglioY=assemblyDiagramInit([1,3,2])([[pareti],[0.2,doorSize-0.2,0.2],[heightDoor-0.2,0.2]])
porteDettaglioX=assemblyDiagramInit([3,1,2])([[0.1,doorSize-0.2,0.1],[pareti],[heightDoor-0.2,0.2]])
toMerge = 121
master = diagram2cell(porteDettaglioY,master,toMerge)
toMerge = 115
master = diagram2cell(porteDettaglioX,master,toMerge)
toMerge = 109
master = diagram2cell(porteDettaglioX,master,toMerge)
toMerge = 103
master = diagram2cell(porteDettaglioX,master,toMerge)
toMerge = 97
master = diagram2cell(porteDettaglioY,master,toMerge)
toMerge = 91
master = diagram2cell(porteDettaglioY,master,toMerge)


"""
V,CV = master
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),RED,0.6)
VIEW(hpc)
"""

#elementi da rimuovere
soffitti=[16,40,20,84,87,85,61,23,46,66,82,86]#ok
muri =[18,79,35,58,156,158,160,162,80]
travi_terrazzo=[168,166,164]
finestre=[254,248,188,194,203,209,218,224,233,239,173,179]
porte=[261,279,273,267,285,291]
rangeCornici=range(169,295)
cornici=FindCornici((porte+finestre),rangeCornici)
removeTotal=soffitti+muri+travi_terrazzo+porte+finestre+cornici

#CREO APPARTAMENTO
V,CV = master
solidCV = [cell for k,cell in enumerate(master[1]) if not (k in removeTotal )]
exteriorCV =  [cell for k,cell in enumerate(master[1]) if k in removeTotal]
exteriorCV += exteriorCells(master)
appartamento=STRUCT(MKPOLS([master[0],solidCV]))

#finestre
V,CV = master
modelFin = V,[cell for k,cell in enumerate(CV) if k in finestre]
modelFinColorate=STRUCT(MKPOLS(modelFin))
modelFinColor = trasparente(modelFinColorate)
VIEW(modelFinColor)

#porte
V,CV = master
modelPorte = V,[cell for k,cell in enumerate(CV) if k in porte ]
modelPorteColorate=STRUCT(MKPOLS(modelPorte))
modelPorteColor=COLOR(colorCornice)(modelPorteColorate)
VIEW(modelPorteColor)


#creo cornici
V,CV = master
modelCorn = V,[cell for k,cell in enumerate(CV) if k in cornici ]
modelCornColorate=STRUCT(MKPOLS(modelCorn))
modelCornColor=COLOR(colorCornice)(modelCornColorate)
VIEW(modelCornColor)

#visualizza appartamento completo
appartamento_totale=STRUCT([modelFinColor,modelCornColor,modelPorteColor,appartamento])


VIEW(appartamento_totale)