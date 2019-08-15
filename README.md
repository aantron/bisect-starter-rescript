# Bisect_ppx+BuckleScript example repo

To try out:

```
git clone https://github.com/aantron/bisect-example-bsb.git
cd bisect-example-bsb
npm install -g esy
npm install
BISECT_ENABLE=yes npm run build
npm run test
./node_modules/.bin/bisect-ppx-report.exe --html _coverage/ *.out
```

These commands generate
[this coverage report](https://aantron.github.io/bisect-example-bsb/) in the
`_coverage` directory. Use your browser to open `_coverage/index.html`!

See [aantron/bisect_ppx](https://github.com/aantron/bisect_ppx).
