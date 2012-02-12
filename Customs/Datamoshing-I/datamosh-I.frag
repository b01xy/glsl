//fragment program

//Ecrit par Oliver Baudu
//Pour le Labomedia
//Sur la base de script de Jack Boyer d'RYBN
//Publie sous GPL v3.0

uniform sampler2D Tex0;
uniform sampler2D Tex1;
uniform vec4 colorToDiscard;
uniform float coef, XX, YY;

void main()
{
	vec4 color = texture2D(Tex1, gl_TexCoord[0].st);
	vec4 colorDessus = texture2D(Tex0, gl_TexCoord[0].st - vec2 (XX, YY));
	if (length (colorDessus - colorToDiscard) < coef) color = colorDessus;
	gl_FragColor = color;
}
