from pyplasm import *

# make a floor
def floor(b,h):
	pts = [[0,0],[b,0],[0,h],[b,h]]
	P = AA(MK)(pts)
	S = AA(JOIN)([P[0:4]])
	H = JOIN(S)

	return H
#make a sphere
def sphere1(p):
	return [COS(p[0]), SIN(p[0])]

def domain(n):
	return INTERVALS(2*PI)(n)	

#difference from two floor
def diff(b,h):
	s=DIFFERENCE([(b),T([1,2])([0.6,0.6])(h)])
	
	return s

def rgb(color):
	return [color[0]/255.0, color[1]/255.0, color[2]/255.0]

#custom colors
COLORE1 = rgb([125, 80, 0.0])
COLORE2 = rgb([130, 100, 0.0])
COLORE3 = rgb([160, 110, 0.0])
COLORE4 = rgb([180, 130, 0.0])
# steps

floor0 = floor(40.1,21.4)
floor1 = floor(38.9,20.2)
floor2 = floor(37.7,19)
floor3 = floor(36.5,17.8)

steps_t=STRUCT([COLOR(COLORE1)(floor0),COLOR(COLORE2)(T([1,2,3])([0.6,0.6,1.2])(floor1)),COLOR(COLORE3)(T([1,2,3])([1.2,1.2,2.4])(floor2)),COLOR(COLORE4)(T([1,2,3])([1.8,1.8,3.6])(floor3))])

#columns
 
circle = MAP(sphere1)(domain(18))
columns1 = STRUCT([COLOR(BLACK)(T([1,2])([0.4,3.4])(circle))])

columns_est = STRUCT(NN(13)([T(1)(2.8), columns1]))
columns_ovest = STRUCT(NN(1)([T(2)(14.2), columns_est]))

columns2 = STRUCT([COLOR(BLACK)(T([1,2])([3.2,3.5])(circle))])

columns_sud = STRUCT(NN(4)([T(2)(2.8), columns2]))
columns_nord = STRUCT(NN(1)([T(1)(33.7), columns_sud]))

floor4a=T([3])([3.7])(STRUCT([columns_est,columns_ovest,columns_sud,columns_nord]))

columns3 = STRUCT([COLOR(BLACK)(T([1,2])([8.4,6.3])(circle))])

internal_front_columns = STRUCT(NN(2)([T(2)(2.8), columns3]))
internal_back_columns = STRUCT(NN(1)([T(1)(24.2),internal_front_columns]))

floor4b= T([3])([3.7])(STRUCT([internal_front_columns,internal_back_columns]))

#walls

wall_est = (T([1,2])([7.4,5.8])(floor(26.2,1)))

wall_ovest = (T([1,2])([7.4,14.2])(floor(26.2,1)))

wall_nord = (T([1,2])([11.4,6.8])(floor(1,7.4)))

wall_sud1 = (T([1,2])([27.2,6.8])(floor(2.7,2.5)))

wall_sud2 = (T([1,2])([27.2,11.7])(floor(2.7,2.5)))

floor4c=COLOR(BLACK)(SKELETON(1)(T([3])([3.7])(STRUCT([wall_est,wall_ovest,wall_nord,wall_sud1,wall_sud2]))))


#capitelli

capitello = (T([1,2])([-0.6,2.4])(floor(2,2)))

cap_est = STRUCT(NN(13)([T(1)(2.8), capitello] ))
cap_ovest = STRUCT(NN(1)([T(2)(14.2), cap_est] ))

capitello2 = (T([1,2])([2.2,2.5])(floor(2,2)))

cap_sud = STRUCT(NN(4)([T([2])(2.8), capitello2]))
cap_nord = STRUCT(NN(1)([T(1)(33.7), cap_sud]))

capitello3 = (T([1,2])([7.4,2.5])(floor(2,2)))

cap_isud = STRUCT(NN(4)([T([2])(2.8), capitello3]))
cap_inord = STRUCT(NN(1)([T(1)(24.2), cap_isud]))

floor5=SKELETON(1)(T([3])([13.2])(STRUCT([cap_est,cap_ovest,cap_sud,cap_nord,cap_isud,cap_inord])))


#travi

trave_est = (T([1,2])([2.2,2.8])(floor(35.6,1.2)))
trave_ovest = STRUCT(NN(1)([T([2])(14.2),trave_est]))

trave_sud=(T([1,2])([2.6,2.8])(floor(1.2,15.4)))
trave_sud1=(T([1,2])([2.6,2.8])(floor(1.2,15.4)))

trave_nord = STRUCT(NN(1)([T([1])(33.6),trave_sud]))
trave_nord1=STRUCT(NN(1)([T([1])(33.6),trave_sud1]))

trave_interna1=(T([1,2])([7.8,5.8])(floor(1.2,9.4)))
trave_interna2=STRUCT(NN(1)([T([1])(24.2),trave_interna1]))

trave_interna3 = (T([1,2])([27.2,6.8])(floor(2.7,7.4)))

floor6=COLOR(GREEN)(SKELETON(1)(T([3])([13.5])(STRUCT([trave_est,trave_ovest,trave_sud,trave_sud1,trave_nord,trave_interna1,trave_interna2,trave_interna3]))))

floor7=COLOR(BROWN)(SKELETON(1)(T([3])([14.7])(STRUCT([trave_sud1,trave_nord1]))))

#TRIANGOLO

triangle_sud=(T([1,2])([2.6,2.8])(floor(1.2,15.4)))
triangle_nord = STRUCT(NN(1)([T([1])(33.6),trave_sud]))

floor8=COLOR(RED)(SKELETON(1)(T([3])([16.2])(STRUCT([triangle_sud,triangle_nord]))))

two_and_half_model=(STRUCT([steps_t,floor4a,floor4b,floor5,floor4c,floor6,floor7,floor8]))

VIEW(two_and_half_model)
