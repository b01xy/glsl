// fragment program


uniform sampler2D Tex0;
uniform sampler2D Tex1;
uniform vec4 colorSelected;
uniform float multiX, multiY, tolerance;

void main()
{
	vec4 color = texture2D(Tex1, gl_TexCoord[0].st);
	vec4 colorDessus = texture2D(Tex0, gl_TexCoord[0].st+vec2(multiX,multiY));
	if (length(colorDessus - colorSelected) < tolerance) color = colorDessus;
	gl_FragColor = color;
}
