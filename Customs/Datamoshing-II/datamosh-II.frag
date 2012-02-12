//fragment program

//Ecrit par Oliver Baudu
//Pour le Labomedia
//Sur la base de script de Jack Boyer d'RYBN
//Publie sous GPL v3.0

uniform sampler2D Tex0;
uniform sampler2D Tex1;
uniform sampler2D Tex2;
uniform vec4 colorToDiscard;
uniform float coef, XX, YY;

void main()
{
	vec4 color = texture2D(Tex1, gl_TexCoord[0].st);
	vec4 color_delay = texture2D(Tex2, gl_TexCoord[0].st - vec2 (XX, YY));
	vec4 colorDessus = texture2D(Tex0, gl_TexCoord[0].st - vec2 (XX, YY));

	if (length (colorDessus - colorToDiscard) < coef) color = colorDessus;
	if (length (color - color_delay) < coef) color = color_delay;
	gl_FragColor = color;
}
