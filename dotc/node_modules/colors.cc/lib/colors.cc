/*	
	ccolors.h
	Created By: Divan Visagie
	License: BSD
*/

#ifndef C_color_H
#define C_COLORS_H

#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>
#include <stdarg.h>
#include <string.h>

#define C_CONSOLE_COLOR_DEFAULT "\e[0m"

enum CC {

	CC_DEFAULT = -1,
	CC_BLACK,
	CC_RED,
	CC_GREEN,
	CC_BROWN,
	CC_BLUE,
	CC_MAGENTA,
	CC_CYAN,
	CC_GRAY, /* halfway point 7 */
	CC_DARK_GRAY,
	CC_LIGHT_RED,
	CC_LIGHT_GREEN,
	CC_YELLOW,
	CC_LIGHT_BLUE,
	CC_LIGHT_MAGENTA,
	CC_LIGHT_CYAN,
	CC_WHITE = 15
};

#export CC_DEFAULT as bg
#export CC_BLACK as black
#export CC_RED as red
#export CC_GREEN as green
#export CC_BROWN as brown
#export CC_BLUE as blue
#export CC_MAGENTA as magenta
#export CC_CYAN as cyan
#export CC_GRAY as gray //note the different spellings
#export CC_GRAY as grey
#export CC_DARK_GRAY as dark_gre
#export CC_LIGHT_RED as light_red
#export CC_LIGHT_GREEN as light_green
#export CC_YELLOW as yellow
#export CC_LIGHT_BLUE as light_blue
#export CC_LIGHT_MAGENTA as light_magenta
#export CC_LIGHT_CYAN as light_cyan
#export CC_WHITE as white


/* 
	Create char* color code from color integer.
	Because of how the color codes work and because lighter
	colors are greater than 7 in the enum their values have 
	to be recalculated by subtracting 8.
*/
char* cc_color_from_int( int col, bool fore ){

	char* buffer = (char*)malloc( sizeof(char)*32 );
	if( col > 7 ) /* light color */
		sprintf( buffer, "\e[01;%d%dm", fore ? 3 : 4, col-8  );
	else /* dark color */
		sprintf( buffer, "\e[22;%d%dm", fore ? 3 : 4, col  );

	return buffer;
}
#export from_int as cc_color_from_int

/* 
	Wraps cstring in color codes.
	This function simply wraps the char* str in color codes
	for printing to the terminal.
*/
std::string ccolor( std::string str, int fore, int back  ){

	int buf_size = ( str.length() + 32 ); /* come up with a good buffer size with
											  some added space for the color codes */
	char* buffer = (char*)malloc( sizeof(char)*buf_size );
	sprintf( buffer, "%s%s%s%s", fore != -1 ? cc_color_from_int( fore, true ) : "",
			 back != -1 ? cc_color_from_int( back, false ) : "",
			  str.c_str(), C_CONSOLE_COLOR_DEFAULT );

	return (const char*)buffer;
}
#export ccolor as use

#endif