//fragment program

vec4 macolor = vec4(0.0,0.0,0.0,0.0);

uniform float deplacement;

void main()
{
	if (gl_TexCoord[0].s > deplacement) {
	macolor = vec4 (1.0,0.0,0.0,1.0);
	}
	if (gl_TexCoord[0].s < deplacement) {
	macolor = vec4 (0.0,1.0,0.0,1.0);
	}
	gl_FragColor = macolor;
}
// if (gl_TextCoord[0].s : première composante
// coordonnées de texture entre 0 et 1
// si on remplace le .s par le .t, on aurra la même chose verticalement
