//fragment program
// on  utilise ici la coordonnées des texture sur les x pour faire un dégradé et plus les vertices

vec4 macolor = vec4(0.0,0.0,0.0,0.0);
vec4 macolorA = vec4(1.0,0.5,0.5,1.0);

uniform float deplacement;

void main()
{
	float posTexX = gl_TexCoord[0].s;
	macolor = posTexX*macolorA;
	gl_FragColor = macolor;
}
// if (gl_TextCoord[0].s : première composante
// coordonnées de texture entre 0 et 1
// si on remplace le .s par le .t, on aurra la même chose verticalement
