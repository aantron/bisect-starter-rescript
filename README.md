# [Bisect_ppx][bisect] + BuckleScript starter repo

```
git clone https://github.com/aantron/bisect-starter-bsb.git
cd bisect-starter-bsb
npm install -g esy
npm install
BISECT_ENABLE=yes npm run build
npm run test
./node_modules/.bin/bisect-ppx-report.exe --html _coverage/ *.out
```

These commands generate
[this coverage report](https://aantron.github.io/bisect-starter-bsb/) locally
in the `_coverage/` directory. Use your browser to open `_coverage/index.html`!

See [aantron/bisect_ppx][bisect], especially the
[BuckleScript instructions][bsb-instructions].

[bisect]: https://github.com/aantron/bisect_ppx
[bsb-instructions]: https://github.com/aantron/bisect_ppx#BuckleScript
