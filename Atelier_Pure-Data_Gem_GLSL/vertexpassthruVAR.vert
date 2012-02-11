//vertex program
// onutilise ici une variable propre au vertice 
// gl_Color : couleur des vertices affecté à toto
// comme elle est varying, elle passe au fragment

varying vec4 toto;

void main()
{
	toto = gl_Color;
	gl_Position = ftransform();
}
