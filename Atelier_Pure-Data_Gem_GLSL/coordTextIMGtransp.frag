//fragment program
// extension pour utiliser des textures rectangulaires, ne pas oublier d'envoyer [rectangle 1< à pix_texture

uniform sampler2D TTex0;
uniform vec4 mouseRGB;
uniform float tolbasse;
uniform float tolhaute;

void main()
{
	vec4 macolor = texture2D(TTex0,gl_TexCoord[0].st);
	if (macolor[0] >= mouseRGB[0]*tolbasse && macolor[0] <= mouseRGB[0]*tolhaute && macolor[1] >= mouseRGB[1]*tolbasse && macolor[1] <= mouseRGB[1]*tolhaute && macolor[2] >= mouseRGB[2]*tolbasse && macolor[2] <= mouseRGB[2]*tolhaute) {
		macolor.a = 0.0;
	}
	gl_FragColor = macolor;
}
// le macolor permet de rendre les pixels dont la valeur de rouge est > 0.7 transparents en ajoutant un alpha à la chaine
