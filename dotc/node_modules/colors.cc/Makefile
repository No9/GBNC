all:
	dotc pre test/test.cc > test/pre.cc
	clang++ test/pre.cc -o test/test
	test/test
clean:
	rm test/test
	rm test/pre.cc