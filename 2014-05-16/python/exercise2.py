from exercise1 import *

# make a floor
def floors(b,h):
	pts = [[0,0],[b,0],[0,h],[b,h]]
	P = AA(MK)(pts)
	S = AA(JOIN)([P[0:4]])
	H = JOIN(S)
	return H

def cespuglio(xval,yval,n,nxyz,distance):
	p1=COLOR(colorCespuglio)(T([1,2,3])([xval,yval,2.1])(SPHERE(2)([8,8])))
	return STRUCT(NN(n)([T(nxyz)(distance),STRUCT([p1])]))

colorCespuglio=rgb([0, 62, 0])
colorLand=rgb([15,77, 9])
colorStreet=rgb([63, 63, 63])
colorBuild=rgb([255,255,128])#giallino
colorBuild1=rgb([255,177,100])#arancione

terreno = T([1,2])([-60,-50])(COLOR(colorLand)((PROD([floors(120,110),Q(0.1)]))))
#appartamenti
appartamentoA=T(1)(5)(appartamento_totale)
appartamentoB=S([1])([-1])(appartamentoA)
floor=STRUCT([appartamentoA,appartamentoB])
floor0=T(3)(-2.6)(floor)
floorN = COLOR(colorBuild)(STRUCT(NN(5)([T(3)(2.7), floor0])))

master2 = assemblyDiagramInit([3,3,2])([[pareti,9.4,pareti],[pareti*2,39.7,pareti*2],[pareti,altezza]])#aggiungo 10
master3 = assemblyDiagramInit([3,4,2])([[pareti,9.4,pareti],[pareti*2,35,4.7,pareti*2],[pareti,altezza]])

main_entrance=assemblyDiagramInit([3,1,2])([[3.25,3.5,3.25],[pareti],[altezza -2,pareti/2]])
doors =assemblyDiagramInit([1,3,2])([[pareti],[4.3,sizeWindow*2,34.5],[heightDoor,altezza - heightDoor ]])
doors1 =assemblyDiagramInit([1,3,2])([[pareti],[4.2,sizeWindow*2+0.17,30],[heightDoor,altezza - heightDoor ]])


toMerge = 7
master2 = diagram2cell(main_entrance,master2,toMerge)
toMerge = 3
master2 = diagram2cell(doors,master2,toMerge)
toMerge = 13
master2 = diagram2cell(doors,master2,toMerge)

porteDettaglioX=assemblyDiagramInit([3,1,2])([[0.2,doorSize+0.8,0.2],[pareti],[heightDoor-0.2,0.2]])
toMerge = 17
master2 = diagram2cell(porteDettaglioX,master2,toMerge)

#elemnti da rimuovere
porte=[22,28]
portaEntrata=[34]
cornici=[32,33,35,36,37]
soffitti=[7]
muri=[8,9]
removeTotal=soffitti+porte+portaEntrata+cornici+muri

#CREO ANDRONE
V,CV = master2
solidCV = [cell for k,cell in enumerate(master2[1]) if not (k in removeTotal )]
exteriorCV =  [cell for k,cell in enumerate(master2[1]) if k in removeTotal]
exteriorCV += exteriorCells(master2)
master2a=STRUCT(MKPOLS([master2[0],solidCV]))
#porta
V,CV = master2
modelPorte = V,[cell for k,cell in enumerate(CV) if k in [None,34] ]
modelPorteColorate=STRUCT(MKPOLS(modelPorte))
modelPorteColor=trasparente(modelPorteColorate)
#cornici
V,CV = master2
modelCorn = V,[cell for k,cell in enumerate(CV) if k in cornici ]
modelCornColorate=STRUCT(MKPOLS(modelCorn))
modelCornColor=COLOR(colorCornice)(modelCornColorate)

master2Fin=STRUCT([master2a,modelCornColor,modelPorteColor])
#master 3

toMerge = 3
master3 = diagram2cell(doors1,master3,toMerge)
toMerge = 18
master3 = diagram2cell(doors1,master3,toMerge)
toRemove = [10,24,30,11,12]
master3 = master3[0], [cell for k,cell in enumerate(master3[1]) if not (k in toRemove)]
#DRAW(master3)

#remove muri per finestra

toRemove3 = [10,11]
master3 = master3[0], [cell for k,cell in enumerate(master3[1]) if not (k in toRemove3)]

#merge master2Fin e master3
m2=T(1)(-5)(master2Fin)
m3=T(1)(-5)(STRUCT(MKPOLS(master3)))
m3a = STRUCT(NN(4)([T(3)(2.7), m3]))
andr=STRUCT([m2,m3a])
androne=COLOR(colorBuild1)(T(3)(+0.1)(andr))


""" rallenta troppo esecuzione 
#archetti terrazzo
trave1 = COLOR(colorCornice)(PROD([floors(0.2,0.2),Q(1.1)]))
trave2= T(1)(1.4)(trave1)
travesup=T(3)(1.1)(COLOR(colorCornice)(PROD([floors(1.6,0.2),Q(0.2)])))

dom1d = larDomain([32])
dom = larExtrude1(dom1d,10*[1./10])
Cu0 = larBezier(S1)([[0.2,0.4], [0.2, 1.19], [0.35, 1.1], [0.8, 1.1]])
Cu1 = larBezier(S1)([[0.2, 1.1], [0.2, 1.1], [0.65, 1.1], [0.8, 1.1]])
Sv1 = larBezier(S2)([[0,0,0],[0,0,0]])
out = larMap(larCoonsPatch([Cu0,Cu1,Sv1,Sv1]))(dom)
result=STRUCT(MKPOLS(out))
pianoCurvo=COLOR(colorCornice)(result)

Bu0 = larBezier(S1)([[0.2,0.4,0], [0.2, 1.19,0], [0.35, 1.1,0], [0.8, 1.1,0]])
Bu1 = larBezier(S1)([[0.2,0.4,-0.2], [0.2, 1.19,-0.2], [0.35, 1.1,-0.2], [0.8, 1.1,-0.2]])
out2 = larMap(larCoonsPatch([Bu0,Bu1,Sv1,Sv1]))(dom)
result2=STRUCT(MKPOLS(out2))
pianoCurvo2=COLOR(colorCornice)(result2)

arco=STRUCT([pianoCurvo2,pianoCurvo,T(3)(-0.2)(pianoCurvo)])

PrimoArco=R([2,3])(PI/2)(arco)
Secondo=R([1,2])(PI)(PrimoArco)
SecondoArco=T([1,2])([1.6,0.2])(Secondo)
cr=STRUCT([trave1,travesup,trave2,PrimoArco,SecondoArco])
copertura1=T([1,2,3])([3.7,43,1.4])(cr)
copertura=STRUCT(NN(25)([T(1)(1.6), copertura1]))

#VIEW(copertura)
"""


stair = spiralStair(width=0.2,R=4,r=0.25,riser=0.1,pitch=5.4,nturns=1,steps=40)
stair = larApply(r(0,0,0))(stair)
stair = larApply(t(0,-2.3,0))(stair)
stairColumn = larApply(t(0,-2.2,0))(larRod(0.25,2.78)())
assembly3D = evalStruct(Struct([stairColumn,stair,t(0,0,2.7)]*4))
stair = STRUCT(CAT(AA(MKPOLS)(assembly3D)))
androne_tot=STRUCT([androne,T([2,3])([38,0.3])(stair)])
VIEW(androne_tot)

#crea piano curvo per finestra
dom1d = larDomain([32])
dom = larExtrude1(dom1d,10*[1./10])
Su0 = larBezier(S1)([[0.5, 1.2], [2.7, 1.3], [0.6, 2.3], [4, 2.2]])
Su1 = larBezier(S1)([[0.5, 0.6], [2.7, 0.6], [0.6, 1.6], [4, 1.6]])

Sv0 = larBezier(S2)([[0,0,0],[0,0,0]])
Sv1 = larBezier(S2)([[0,0,0],[0,0,0]])
out = larMap(larCoonsPatch([Su0,Su1,Sv0,Sv1]))(dom)
str=STRUCT(MKPOLS(out))
str2=S([1,2])([10,5])(str)
str3=R([1,2])(PI/2)(str2)
#TRASLA
street=COLOR(colorStreet)(T([1,2,3])([9.5,-40,0.2])(str3))


#finestra curva
Su0 = larBezier(S1)([[0.08, 2.06,0], [0.31, 3.29,0], [2.1, 3.25,0], [2.32, 2.06,0]])
Su1 = larBezier(S1)([[0.08, 2.06,0], [0.08, 2.06,0],[2.32, 2.06,0], [2.32, 2.06,0]])

out = larMap(larCoonsPatch([Su0,Su1,Sv0,Sv1]))(dom)
result=STRUCT(MKPOLS(out))
pianoCurvo=COLOR(colorBuild1)(result)

#facciata
Sz0 = larBezier(S1)([[0.08, 2.06,2.7], [0.31, 3.29,2.7], [2.1, 3.25,2.7], [2.32, 2.06,2.7]])

out = larMap(larCoonsPatch([Su0,Sz0,Sv0,Sv1]))(dom)
faccia=STRUCT(MKPOLS(out))
VIEW(faccia)


fin_terra=STRUCT([trasparente(faccia),pianoCurvo])
fin_sup=STRUCT(NN(4)([T(3)(2.5), faccia]))

fin1=STRUCT([fin_terra,trasparente(fin_sup)])
fin2=S([1,2,3])([4.6,4.5,1.1])(fin1)
fin3=T([1,2,3])([-5.5,31,0.15])(fin2)
finestra_androne=STRUCT([fin3])

#tetto
tettoA = COLOR(colorCornice)(PROD([floors(40,37),Q(1.1)]))
tetto1=T([1,2,3])([-45,-2,14])(tettoA)
tetto =STRUCT([tetto1,T(1)(50)(tetto1)])


Sx0 = larBezier(S1)([[0.08,2.06, 2.06], [0.31,2.06, 3.29], [2.1,2.06, 3.25], [2.32,2.06, 2.06]])
Sx1 = larBezier(S1)([[0.08,2.06,2.06], [0.31, 3.29,2.06], [2.1, 3.25,2.06], [2.32, 2.06,2.06]])
out = larMap(larCoonsPatch([Sx0,Sx1,Sv0,Sv1]))(dom)
result=STRUCT(MKPOLS(out))
giuntura=COLOR(RED)(result)#cupoletta
VIEW(giuntura)
Sz1 = larBezier(S1)([[0.08,-10, 2.06], [0.31,-10, 3.29], [2.1,-10, 3.25], [2.32,-10, 2.06]])
out = larMap(larCoonsPatch([Sx0,Sz1,Sv0,Sv1]))(dom)
result=STRUCT(MKPOLS(out))
giuntura2=COLOR(RED)(result)#tetto lungo
VIEW(giuntura2)

Sz2 = larBezier(S1)([[0.08,-10, 2.06], [0.08,-10, 2.06], [2.32,-10, 2.06], [2.32,-10, 2.06]])
out = larMap(larCoonsPatch([Sz1,Sz2,Sv0,Sv1]))(dom)
result=STRUCT(MKPOLS(out))
giuntura3=COLOR(RED)(result)#parte finale
#VIEW(giuntura3)

tetto2=STRUCT([giuntura2,giuntura3,giuntura])
tetto2a=S([1,2,3])([4.4,3.6,4.5])(tetto2)
tetto2b=fin3=T([1,2,3])([-5.3,33.9,4.8])(tetto2a)

cesp=cespuglio(68,-50,30,2,1.5)
cespa=STRUCT(NN(45)([T(1)(1),STRUCT([cesp])]))
cesp1=STRUCT(NN(2)([T(1)(-60),STRUCT([cespa])]))

VIEW(STRUCT([terreno,floorN,androne_tot,street,finestra_androne,tetto,trasparente(tetto2b),cesp1]))