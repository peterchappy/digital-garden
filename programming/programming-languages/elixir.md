### Elixir

Elixir is a fault tolerant FP language that is built ontop of the Erlang VM and uses Ruby style syntax

##### Elixir's Relationship with Erlang

```
Elixir -> transpiled to Erlang -> compiled and executed in BEAM
```

Erlang was a solution designed by telecom companies to handle large telephone systems. BEAM is a virtual machine in which all Erlang code gets exectured. Think of it like the JVM. 

Certain standard library of Erlang are not implemented in Elixir and require Erlang to be called. One Example is `:erlang.term_to_binary` for saving files to filesystems.

### Language Features

##### List Comprehension

`for value <- values do` syntax acts as a map returning a new element

```
  for suit <- suits do
    suit
  end
```

You are able to do list comprehension over multiple lists and it 
will act as a flat map

```
  for value <- values, suit <- suits do
    "#{value} of #{suit}"
  end
```

##### Pattern Matching

Pattern matching is Elixir's replacement for variable assignment. 

```
  def deal(deck, hand_size) do
    # Returns a tuple of hand at position 0 and 
    # deck at position 1
    { hand, rest_of_deck } = Enum.split(Cards.shuffle(deck), hand_size)
  end
```

Patern matching is used anytime `=` is used

```
color1 = ["red"]                            # color1 is a list
[ color1 ] = ["red"]                        # color1 is a string
[color1, color2] = ["red", "blue"]          
[color1, color2, color3] = ["red", "blue"]  # Error thrown

```

#### Links

- [Building a Distributed Turn-Based Game System in Elixir](https://fly.io/blog/building-a-distributed-turn-based-game-system-in-elixir/)
- [Good and Bad Elixir](https://keathley.io/blog/good-and-bad-elixir.html)
- [DDD with Elixir](https://hackernoon.com/domain-driven-design-in-elixir-4dc416ac0a36)
- [Elixir Keynote](https://www.youtube.com/watch?v=tMO28ar0lW8)
- [Elixir Exercises](https://exercism.io/tracks/elixir)
- [How Discord Scaled Elixir to 5,000,000 Concurrent Users](https://blog.discord.com/scaling-elixir-f9b8e1e7c29b)
- [10ish years of Elixir](https://dashbit.co/blog/ten-years-ish-of-elixir)
- [Ask HN: Are you satisfied with Elixir or do you regret choosing Elixir?](https://news.ycombinator.com/item?id=27192873)
- [Thinking Elixir Podcast](https://thinkingelixir.com)