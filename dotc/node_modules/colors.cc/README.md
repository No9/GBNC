colors.cc
=======

colors.cc is a library for quickly adding color codes to your C++ strings for terminal output.

## Usage 

To use colors.cc, simply `npm install colors.cc` and `#require "colors.cc" as colors`

colors.use() takes 3 parameters and returns a std::string;

| Parameter | Type  | Desctription 					  |
|-----------|-------|---------------------------------|
| str   | std::string | The string you wish to colorise |
| fore      | int   | foreground color 				  |
| back      | int   | background color 				  |


The colors are represented by numbers 0 - 15 with -1 as the default, you can use the enum
values to represent colors or the numbers as specified in the table below:

| Color         | Enum             | No |
|---------------|------------------|----|
| default       | CC_DEFAULT       | -1 |
| black         | CC_BLACK         |  0 |
| red           | CC_RED      	   |  1 |	
| green         | CC_GREEN         |  2 |
| brown         | CC_BROWN         |  3 |
| blue          | CC_BLUE          |  4 |
| maganta       | CC_MAGENTA       |  5 |
| cyan          | CC_CYAN          |  6 |
| gray          | CC_GRAY          |  7 |
| dark_gray     | CC_DARK_GRAY     |  8 |
| light_red     | CC_LIGHT_RED     |  9 |
| light_green   | CC_LIGHT_GREEN   | 10 |
| yellow        | CC_YELLOW        | 11 |
| light_blue    | CC_LIGHT_BLUE    | 12 |
| light_magenta | CC_LIGHT_MAGENTA | 13 |  
| light_cyan    | CC_LIGHT_CYAN    | 14 |
| white         | CC_WHITE = 15    | 15 |



## EXAMPLE

	#include <iostream>
	#include <string>

	#require "colors.cc" as colors

	using namespace std;

	int main( int argc, char* argv[] ) {

		string a = "Hello colorful world";

		cout << colors.use( a, colors.grey , colors.magenta ) << endl;
		cout << colors.use( "single test", colors.cyan, colors.bg ) << endl;
		cout << colors.use( " single test ", colors.black, colors.blue) << endl;

		return 0;
	}

## LICENSE

BSD LICENSE

Copyright (c) 2013, Divan Visagie
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:
1. Redistributions of source code must retain the above copyright
   notice, this list of conditions and the following disclaimer.
2. Redistributions in binary form must reproduce the above copyright
   notice, this list of conditions and the following disclaimer in the
   documentation and/or other materials provided with the distribution.
3. All advertising materials mentioning features or use of this software
   must display the following acknowledgement:
   This product includes software developed by Divan Visagie.
4. Neither the name of Divan Visagie nor the
   names of its contributors may be used to endorse or promote products
   derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY Divan Visagie ''AS IS'' AND ANY
EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL Divan Visagie BE LIABLE FOR ANY
DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.