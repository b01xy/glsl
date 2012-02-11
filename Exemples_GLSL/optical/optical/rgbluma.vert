/*
 *
 * Derek Gerstmann - derek@cycling74.com
 * Copyright 2005 - Cycling '74
 *
 * GLSL vertex program for doing a standard vertex transform and 
 * with texture coordinates.
 *
 */
 
varying vec2 texcoord0;
varying vec2 texcoord1;
void main()
{
	// perform standard transform on vertex
	gl_Position = ftransform();
    
	// transform texcoords
	texcoord0 = gl_MultiTexCoord0.st;
	texcoord1 = gl_MultiTexCoord1.st;
	}