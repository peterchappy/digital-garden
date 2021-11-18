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

```ex
  for suit <- suits do
    suit
  end
```

You are able to do list comprehension over multiple lists and it 
will act as a flat map

```ex
  for value <- values, suit <- suits do
    "#{value} of #{suit}"
  end
```

##### Pattern Matching

Pattern matching is Elixir's replacement for variable assignment. 

```ex
  def deal(deck, hand_size) do
    # Returns a tuple of hand at position 0 and 
    # deck at position 1
    { hand, rest_of_deck } = Enum.split(Cards.shuffle(deck), hand_size)
  end
```

Patern matching is used anytime `=` is used

```ex
color1 = ["red"]                            # color1 is a list
[ color1 ] = ["red"]                        # color1 is a string
[color1, color2] = ["red", "blue"]          
[color1, color2, color3] = ["red", "blue"]  # Error thrown

```

Case Statements

```ex
  def load(file_name) do
    { status, binary } = File.read(file_name)

    case status do
      :ok -> :erlang.binary_to_term(binary)
      :error -> "file does not exist"
    end
  end
  
```

Case statements can destructure the tuple like

```ex
  def load(file_name) do
    case  File.read(file_name) do
      {:ok, binary} -> :erlang.binary_to_term binary
      {:error} -> "file does not exist"
    end
  end
```

##### Maps

```
colors = %{primary: "red"}
colors = %{primary: "red", secondary: "blue"}
%{secondary: secondary_color} = colors
secondary_color
"blue"
```

Updating properties in a map can be done two

```
Map.put(colors, :primary, "green")
%{primary: "green", secondary: "blue"}
```

or

```
%{colors | primary: "green"}
%{primary: "green", secondary: "blue"}
```

However the latter example can only be used to update a property. Adding a property will through an error.

```%{colors | primary_2: "green"}
** (KeyError) key :primary_2 not found in: %{primary: "red", secondary: "blue"}. Did you mean one of:

      * :primary

    (stdlib 3.15.1) :maps.update(:primary_2, "green", %{primary: "red", secondary: "blue"})
    (stdlib 3.15.1) erl_eval.erl:256: anonymous fn/2 in :erl_eval.expr/5
    (stdlib 3.15.1) lists.erl:1267: :lists.foldl/3
```

##### Keyword Lists

```
colors = [primary: "red", secondary: "blue"]
colors = [primary: "red", primary: "blue:]

# practical example

query = Users.find_where([where: user.age > 10, where: user.subscribed == true])

# this is the same as above since the last arguments is a Keyword List
query = Users.find_where(where: user.age > 10, where: user.subscribed == true)

# which is the same as 
query = Users.find_where where: user.age > 10, where: user.subscribed == true
```

##### Testing

DocTests are examples of code that will auto run as tests. NOTE: Indentation is key for this to work properly. 

```
  @doc """
    Determines wether a deck contains a given card

  ## Examples

      iex> deck = Cards.create_deck
      iex> Cards.contains?(deck, "Ace of Spades")
      true
  """
  def contains?(deck, card) do
    Enum.member?(deck,card)
  end
```

##### Structs

Why use structs over a map? Structs enforce that only the properties of the struct exist. Normal maps will allow you to add any property you want.

##### Tips

How to install `egd`?

Ass the following to your mix.exs
```
{:egd, github: "erlang/egd"}
```

#### Books

- [Genetic Algorithms in Elixir](https://pragprog.com/titles/smgaelixir/genetic-algorithms-in-elixir/)
### Links

- [Elixir - A modern approach to programming for the Erlang VM](https://vimeo.com/53221562)
- [Building a Distributed Turn-Based Game System in Elixir](https://fly.io/blog/building-a-distributed-turn-based-game-system-in-elixir/)
- [Good and Bad Elixir](https://keathley.io/blog/good-and-bad-elixir.html)
- [DDD with Elixir](https://hackernoon.com/domain-driven-design-in-elixir-4dc416ac0a36)
- [Elixir Keynote](https://www.youtube.com/watch?v=tMO28ar0lW8)
- [Elixir Exercises](https://exercism.io/tracks/elixir)
- [How Discord Scaled Elixir to 5,000,000 Concurrent Users](https://blog.discord.com/scaling-elixir-f9b8e1e7c29b)
- [10ish years of Elixir](https://dashbit.co/blog/ten-years-ish-of-elixir)
- [Ask HN: Are you satisfied with Elixir or do you regret choosing Elixir?](https://news.ycombinator.com/item?id=27192873)
- [Thinking Elixir Podcast](https://thinkingelixir.com)
- [Axon: Deep Learning in Elixir](https://seanmoriarity.com/2021/04/08/axon-deep-learning-in-elixir/)
- [Livebook](https://github.com/elixir-nx/livebook)
- [Onboarding to Elixir](https://underjord.io/onboarding-to-elixir.html)
- [New Elixir 1.12 - The developer’s point of view](https://bartoszgorka.com/elixir-1-12-released)
- [How Phoenix LiveView works](https://www.poeticoding.com/how-phoenix-liveview-works/)
- [Revisiting a Video Chat Application with Phoenix and WebRTC](https://hashrocket.com/blog/posts/revisiting-a-video-chat-application-with-phoenix-and-webrtc)
- [An Elixir Adoption Success Story](https://www.thegreatcodeadventure.com/an-elixir-adoption-success-story/)
- [Monitoring Elixir Apps on Fly.io With Prometheus and PromEx](https://fly.io/blog/monitoring-your-fly-io-apps-with-prometheus/)
- [Lonestar ElixirConf 2017- KEYNOTE: Phoenix 1.3 by Chris McCord](https://www.youtube.com/watch?v=tMO28ar0lW8)