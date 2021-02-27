(module
 (table 0 anyfunc)
 (memory $0 1)
 (export "memory" (memory $0))
 (export "countPrimes" (func $countPrimes))
 (export "getNewPrimeNumber" (func $getNewPrimeNumber))
 (export "isPrimeNumber" (func $isPrimeNumber))
 (func $countPrimes (; 0 ;) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (set_local $4
   (i32.const 2)
  )
  (set_local $3
   (i32.const 1)
  )
  (loop $label$0
   (set_local $1
    (get_local $3)
   )
   (set_local $2
    (i32.add
     (get_local $4)
     (i32.const 1)
    )
   )
   (block $label$1
    (br_if $label$1
     (i32.lt_s
      (get_local $4)
      (i32.const 3)
     )
    )
    (loop $label$2
     (set_local $3
      (i32.div_s
       (get_local $2)
       (i32.const 2)
      )
     )
     (set_local $4
      (i32.const 1)
     )
     (block $label$3
      (loop $label$4
       (br_if $label$3
        (i32.eqz
         (i32.rem_s
          (get_local $2)
          (tee_local $4
           (i32.add
            (get_local $4)
            (i32.const 1)
           )
          )
         )
        )
       )
       (br_if $label$4
        (i32.lt_s
         (get_local $4)
         (get_local $3)
        )
       )
       (br $label$1)
      )
     )
     (set_local $2
      (i32.add
       (get_local $2)
       (i32.const 1)
      )
     )
     (br $label$2)
    )
   )
   (set_local $3
    (i32.add
     (get_local $1)
     (i32.const 1)
    )
   )
   (set_local $4
    (get_local $2)
   )
   (br_if $label$0
    (i32.le_s
     (get_local $2)
     (get_local $0)
    )
   )
  )
  (get_local $1)
 )
 (func $getNewPrimeNumber (; 1 ;) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (set_local $1
   (i32.add
    (get_local $0)
    (i32.const 1)
   )
  )
  (block $label$0
   (br_if $label$0
    (i32.lt_s
     (get_local $0)
     (i32.const 3)
    )
   )
   (loop $label$1
    (set_local $2
     (i32.div_s
      (get_local $1)
      (i32.const 2)
     )
    )
    (set_local $0
     (i32.const 1)
    )
    (block $label$2
     (loop $label$3
      (br_if $label$2
       (i32.eqz
        (i32.rem_s
         (get_local $1)
         (tee_local $0
          (i32.add
           (get_local $0)
           (i32.const 1)
          )
         )
        )
       )
      )
      (br_if $label$3
       (i32.lt_s
        (get_local $0)
        (get_local $2)
       )
      )
      (br $label$0)
     )
    )
    (set_local $1
     (i32.add
      (get_local $1)
      (i32.const 1)
     )
    )
    (br $label$1)
   )
  )
  (get_local $1)
 )
 (func $isPrimeNumber (; 2 ;) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (set_local $1
   (i32.div_s
    (get_local $0)
    (i32.const 2)
   )
  )
  (set_local $3
   (i32.const 1)
  )
  (block $label$0
   (block $label$1
    (br_if $label$1
     (i32.lt_s
      (get_local $0)
      (i32.const 4)
     )
    )
    (set_local $2
     (i32.const 1)
    )
    (loop $label$2
     (br_if $label$0
      (i32.eqz
       (i32.rem_s
        (get_local $0)
        (i32.add
         (get_local $2)
         (i32.const 1)
        )
       )
      )
     )
     (set_local $3
      (i32.const 1)
     )
     (br_if $label$2
      (i32.lt_s
       (tee_local $2
        (i32.add
         (get_local $2)
         (i32.const 1)
        )
       )
       (get_local $1)
      )
     )
    )
   )
   (return
    (get_local $3)
   )
  )
  (i32.const 0)
 )
)
