from pyplasm import *
from myfont import *
from exercise2 import *
from exercise3 import *

#tree
def tree(h,xval,yval,n,nxyz,distance,type):
	t=COLOR(colorTronco)(T([1,2])([xval,yval])(CYLINDER ([0.8,h])(36)))
	p1=COLOR(colorTree)(T([1,2,3])([xval,yval,h])(SPHERE(h/2.5)([8,8])))

	t2=COLOR(colorTronco)(T([1,2])([xval,yval])(CYLINDER ([1.2,h])(36)))
	p2=COLOR(colorPino)(T([1,2,3])([xval,yval,h/2])(CONE([h/2.2,h*2.0])(16)))

	if type == 0 :
		a=STRUCT([t,p1])
		return STRUCT(NN(n)([T(nxyz)(distance),a]))
	else:
		b=STRUCT([t2,p2])
		return STRUCT(NN(n)([T(nxyz)(distance),b]))



def cespuglio(xval,yval,n,nxyz,distance):
	p1=COLOR(colorCespuglio)(T([1,2,3])([xval,yval,2.1])(SPHERE(2)([8,8])))
	return STRUCT(NN(n)([T(nxyz)(distance),STRUCT([p1])]))

def Lampione(h,xval,yval,n,nxyz,distance):
	t=COLOR(GRAY)(T([1,2])([xval,yval])(CYLINDER ([0.3,h])(36)))
	p1=COLOR(colorLight)(T([1,2,3])([xval,yval,h])(SPHERE(1)([8,8])))
	return STRUCT(NN(n)([T(nxyz)(distance),STRUCT([t,p1])]))


def stop(h,xval,yval):
	t=COLOR(YELLOW)(T([1,2])([xval,yval])(CYLINDER ([0.3,h])(36)))
	p1=COLOR(YELLOW)(T([1,2,3])([xval-2,yval-0.5,h])(CUBOID([4,1,5.5])))
	obj = PROD ([OFFSET([0.5 ,0.25])( TEXT ( " FERMATA " )),Q (1) ])
	obj = S([1,2,3])([0.1,0.1,0.1])(obj)
	obj=ROTATE([2,3])(PI/2)(obj)
	obj=COLOR(BLACK)(T([1,2,3])([xval-2.3,yval-0.5,h+4])(obj))
	return STRUCT([t,p1,obj])


def panchina(xval,yval):
	schiena=COLOR(colorPanchine)(T([1,2,3])([xval,yval,2])(CUBOID([8,0.2,3.6])))
	base=COLOR(colorPanchine)(T([1,2,3])([xval,yval,2])(CUBOID([8,4,0.2])))

	zampe=COLOR(colorPanchine)(T([1,2])([xval+1,yval+0.6])(CYLINDER ([0.2,2])(36)))
	zampex=COLOR(colorPanchine)(T([1,2])([xval+7,yval+0.6])(CYLINDER ([0.2,2])(36)))
	zampex1=STRUCT([zampe,zampex])
	zampex2=STRUCT([T(2)(3)(zampex1)])

	return S([1,2,3])([0.6,0.6,0.6])(STRUCT([base,schiena,zampex1,zampex2]))

panchina1=R([1,2])(PI/2)(panchina(164,-180))
panchina2=R([1,2])(PI/2)(panchina(152,-180))
panchina3=R([1,2])(PI/2)(panchina(132,-180))
panchina4=R([1,2])(PI/2)(panchina(120,-180))
panchina5=R([1,2])(-PI/2)(panchina(-84,230))
panchina6=R([1,2])(-PI/2)(panchina(-94,230))
panchina7=R([1,2])(PI/2)(panchina(130,-212))
panchina_t=STRUCT([panchina1,panchina2,panchina3,panchina4,panchina5,panchina6,panchina7])


stop1=T([1,2,3])([115,74,0.1])(stop(10,10,10))

lamp1=Lampione(10,6,0,9,2,12)
lamp2=Lampione(10,0,116,14,1,13)

cesp1=cespuglio(180,40,15,2,4)
cesp2=cespuglio(185,40,17,2,3.5)
cesp3=cespuglio(190,40,20,2,3)
cesp4=cespuglio(170,60,10,2,4)
cesp5=cespuglio(175,60,10,2,4)
cesp_t=STRUCT([cesp1,cesp2,cesp3,cesp4,cesp5])


tree1=tree(8,1,0,4,2,24,1)
tree2=tree(12,173,68,4,2,7,0)
tree3=tree(10,4,107,9,1,12,0)
tree4=tree(10,4,67,9,1,12,0)
tree5=tree(8,187,45,6,2,7,1)
tree_t=STRUCT([tree1,tree2,tree3,tree4,tree5])

total_dettagli=T([3])([0.1])(STRUCT([tree_t,lamp1,lamp2,cesp_t,stop1,panchina_t]))


VIEW(STRUCT([total_place,total_dettagli]))