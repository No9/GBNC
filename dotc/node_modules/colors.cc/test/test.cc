#include <iostream>
#include <string>

#require "../lib/colors.cc" as colors

using namespace std;

int main( int argc, char* argv[] ) {

	string a = "Hello colorful world";

	cout << colors.use( a, colors.grey , colors.magenta ) << endl;
	cout << colors.use( "single test", colors.cyan, colors.bg ) << endl;
	cout << colors.use( " single test ", colors.black, colors.blue) << endl;

	return 0;
}