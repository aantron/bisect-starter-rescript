let () = {
  Bisect.Runtime.write_coverage_data_on_exit()

  Random.self_init()

  if Random.int(2) == 0 {
    print_endline("Hello, world!")
  }
  else {
    print_endline("We come in peace.")
  }
}
