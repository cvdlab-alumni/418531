from exercise1 import *


def triangle_generator(b,h):
	pts = [[0,0],[b,0],[(b/2),h]]
	P = AA(MK)(pts)
	S = AA(JOIN)([P[0:3]])
	H = JOIN(S)

	return H


#####side south

floor0s = floor(21.4,1)
floor1s = T([1])([0.6])(floor(20.2,2))
floor2s = T([1])([1.2])(floor(19,3))
floor3s = T([1])([1.8])(floor(17.8,4))


steps_south=STRUCT([floor0s,floor1s,floor2s,floor3s])

#columns
columns = (T([1,2])([0,4])(floor(2,10.75)))
columns_south = STRUCT(NN(6)([T([1])(2.8), columns]))

#capitello
capitellosouth = (T([1,2])([-0.2,14.7])(floor(2.4,0.3)))
cap_south = STRUCT(NN(6)([T([1])(2.8), capitellosouth]))

#trave
trave_south=(T([1,2])([2.8,15])(floor(16,1.2)))
trave_south2=(T([1,2])([2.8,16.2])(floor(16,1.2)))


#triangolo
triangolo_south=(T([1,2])([2.2,17.4])(triangle_generator(17.3,3.7)))

south=COLOR(COLORE4)(R([1,3])(PI*3/2)(R([1,2])(PI/2)(STRUCT([steps_south,columns_south,trave_south,trave_south2,cap_south,triangolo_south]))))

#####side north

north = STRUCT(NN(1)([T([1])(40.1), south]))


#####side west

floor0w = floor(40.1,1)
floor1w = T([1])([0.6])(floor(38.9,2))
floor2w = T([1])([1.2])(floor(37.7,3))
floor3w = T([1])([1.8])(floor(36.5,4))


steps_west=STRUCT([floor0w,floor1w,floor2w,floor3w])

columnswest = (T([1,2])([-0.5,3.9])(floor(2,10.75)))
columns2west = STRUCT(NN(13)([T([1])(2.8), columnswest]))

#capitello
capitellowest = (T([1,2])([-0.6,14.6])(floor(2.4,0.3)))
cap_west = STRUCT(NN(13)([T([1])(2.8), capitellowest]))

trave_west=(T([1,2])([2.3,14.9])(floor(35.6,1.2)))
trave_west2=(T([1,2])([2.3,16.1])(floor(4,1.2)))

west=COLOR(COLORE4)(R([2,3])(PI/2)(STRUCT([columns2west,steps_west,cap_west,trave_west,trave_west2])))


#####side est

est = STRUCT(NN(1)([T([2])(21.4), west]))


mock_up_3D=STRUCT([steps_t,floor4a,floor4b,floor5,floor4c,floor6,floor7,floor8,south,north,west,est])
VIEW(mock_up_3D)
