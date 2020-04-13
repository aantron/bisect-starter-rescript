# [Bisect_ppx][bisect] + BuckleScript starter repo

```
git clone https://github.com/aantron/bisect-starter-bsb.git
cd bisect-starter-bsb
npm install
rm -f *.coverage
BISECT_ENABLE=yes npm run build
npm run test
npx bisect-ppx-report html
```

These commands generate
[this coverage report](https://aantron.github.io/bisect-starter-bsb/) locally
in the `_coverage/` directory. Use your browser to open `_coverage/index.html`!

[Here][demo] is an example of a coverage report for a real-world project.

See [aantron/bisect_ppx][bisect], especially the
[BuckleScript instructions][bsb-instructions].

[bisect]: https://github.com/aantron/bisect_ppx
[bsb-instructions]: https://github.com/aantron/bisect_ppx#BuckleScript
[demo]: https://aantron.github.io/bisect_ppx/demo/
