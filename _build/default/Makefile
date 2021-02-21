BUILDDIR = _build/default
SERVERDIR = src/server
CLIENTDIR = src/client
COPY_FILES = $(BUILDDIR)/blockchainapp.exe $(BUILDDIR)/index.js $(BUILDDIR)/index.html
COMPILE_FILES = ${BUILDDIR}/src/server/blockchainapp.exe ${BUILDDIR}/src/client/index.js

all: $(COPY_FILES) $(COMPILE_FILES)

$(BUILDDIR):
	mkdir -p $@

${BUILDDIR}/src/server/blockchainapp.exe:
	cd ${SERVERDIR}; dune build blockchainapp.exe	

${BUILDDIR}/src/client/index.js:
	cd ${CLIENTDIR}; dune build @app

$(BUILDDIR)/blockchainapp.exe: ${BUILDDIR}/src/server/blockchainapp.exe
$(BUILDDIR)/index.js: ${BUILDDIR}/src/client/index.js
$(BUILDDIR)/index.html: ${BUILDDIR}/src/client/index.html

$(BUILDDIR)/%:
	cp -f $< $@