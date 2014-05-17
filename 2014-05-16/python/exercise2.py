from exercise1 import *

# make a floor
def floors(b,h):
	pts = [[0,0],[b,0],[0,h],[b,h]]
	P = AA(MK)(pts)
	S = AA(JOIN)([P[0:4]])
	H = JOIN(S)
	return H

def rgb(color):
	return [color[0]/255.0, color[1]/255.0, color[2]/255.0]


colorLand=rgb([15,77, 9])
colorStreet=rgb([63, 63, 63])
colorBuild=rgb([255,255,128])#giallino
colorBuild1=rgb([129,192,192])#azzurro



terreno = T([1,2])([-40,-35])(COLOR(colorLand)((PROD([floors(80,70),Q(0.1)]))))


appartamentoA=T(1)(5)(STRUCT(MKPOLS(master)))
appartamentoB=S([1])([-1])(appartamentoA)

floor=STRUCT([appartamentoA,appartamentoB])
floor0=T(3)(-2.6)(floor)
floorN = COLOR(colorBuild)(STRUCT(NN(5)([T(3)(2.7), floor0])))

VIEW(floorN)

master2 = assemblyDiagramInit([3,3,2])([[pareti,9.4,pareti],[pareti*2,29.7,pareti*2],[pareti,altezza]])
master3 = assemblyDiagramInit([3,4,2])([[pareti,9.4,pareti],[pareti*2,21,8.7,pareti*2],[pareti,altezza]])
main_entrance=assemblyDiagramInit([3,1,2])([[3.75,2.5,3.75],[pareti],[altezza -2,pareti/2]])
doors =assemblyDiagramInit([1,3,2])([[pareti],[7.9,sizeWindow*3,20.5],[heightDoor,altezza - heightDoor ]])
doors1 =assemblyDiagramInit([1,3,2])([[pareti],[7.9,sizeWindow*3,11.8],[heightDoor,altezza - heightDoor ]])
stair_space = assemblyDiagramInit([1,2,3])([[pareti],[19,7,4],[pareti,altezza]])


toMerge = 7
master2 = diagram2cell(main_entrance,master2,toMerge)

toMerge = 3
master2 = diagram2cell(doors,master2,toMerge)

toMerge = 13
master2 = diagram2cell(doors,master2,toMerge)


V,CV = master2

toRemove = [7,17,23,29]
master2 = V,[cell for k,cell in enumerate(CV) if not (k in toRemove)]
#DRAW(master2)


#master 3

toMerge = 3
master3 = diagram2cell(doors1,master3,toMerge)

toMerge = 18
master3 = diagram2cell(doors1,master3,toMerge)

toRemove = [10,24,30,11,12]
master3 = master3[0], [cell for k,cell in enumerate(master3[1]) if not (k in toRemove)]
#DRAW(master3)

#merge master2 e master3

m2=T(1)(-5)(STRUCT(MKPOLS(master2)))
m3=T(1)(-5)(STRUCT(MKPOLS(master3)))
m3a = STRUCT(NN(4)([T(3)(2.7), m3]))
andr=STRUCT([m2,m3a])
androne=COLOR(colorBuild1)(T(3)(+0.1)(andr))
VIEW(androne)
#VIEW(STRUCT([floorN,androne]))

#stair

stair = spiralStair(width=0.2,R=3,r=0.25,riser=0.1,pitch=4.4,nturns=1.75,steps=36)
stair = larApply(r(0,0,3*PI/2))(stair)
stair = larApply(t(0,-3,0))(stair)
stairColumn = larApply(t(0,-3,0))(larRod(0.25,4.2)())
assembly3D = evalStruct(Struct([stairColumn,stair,t(0,0,4)]*3))
stair = STRUCT(CAT(AA(MKPOLS)(assembly3D)))
androne_tot=STRUCT([androne,T(2)(25)(stair)])
VIEW(androne_tot)
VIEW(STRUCT([terreno,floorN,androne_tot]))


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

VIEW(STRUCT([terreno,floorN,androne,street,T(2)(25)(stair)]))