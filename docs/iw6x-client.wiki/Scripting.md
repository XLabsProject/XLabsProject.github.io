# Introduction
This is the documentation for the IW6x scripting API.  
Please note that the API might change over time and thus break existing scripts.  
The intention is to create the best API possible and thus negelecting backwards compatibility.  
There are also plans to create a common API with the Plutonium team, which might also have a huge impact on the API again, once this is done.  

The IW6x scipring API integrates into the game's scripting VM/environment, which might be more commonly known as GSC.
The scripts are written in LUA. In case you are not familiar with LUA, you should catch up <a href="https://www.lua.org/pil/contents.html" target="_blank">here</a>.

# Quick & dirty Example
Here is a sample script. If you want to read code instead of documentation, this should cover up the basics of the API:

`iw6x/scripting/heli/__init__.lua`

```lua
function move_helicopter(heli, player)
    local origin = player.origin
    origin.z = origin.z + 1000
    
    heli:setvehgoalpos(origin, 1)
end

function setup_helicopter(heli, player)
    heli:setturningability(1)
    heli:setspeed(40, 15, 5)
    heli:setcandamage(false)
    
    local moveinterval = game:oninterval(function() move_helicopter(heli, player) end, 5000)
    
    function disconnect_callback()
        moveinterval:clear()
        heli:delete()
    end
    
    player:onnotifyonce("disconnect", disconnect_callback)
end

function spawn_helicopter(player)
    local origin = player.origin;
    local angles = player.angles;
    
    origin.z = origin.z + 1000.0;
    
    local heli = game:spawnhelicopter(player, origin, angles, "cobra_mp", "vehicle_battle_hind")
    
    setup_helicopter(heli, player)
end

function player_spawned(player)
    print("Player spawned: " .. player.name)
    player:freezecontrols(false)

    spawn_helicopter(player)
end

function player_connected(player)
    print("Player connected: " .. player.name)
    
    player:onnotifyonce("spawned_player", function() player_spawned(player) end)
end

level:onnotify("connected", player_connected)
```

# File structure

# Types
There are only 5 distinct types needed to interact with game's scripting environment.  
LUA of course has more types, but what is meant by this is the following:  
When dealing with events, functions or fields, no complex LUA types are supported, only these primitive types:

## Strings
Strings are text enclosed by quotes: `"Hello World"`.
There is not much to say about them, as they are a common concept.

## Integer
Integers are all whole numbers like `0`, `1000` or `-15`.  
Boolean values, so `true` and `false`, also fall under that category and are handled as `1` and `0` respectively.

## Float
Floating point values are all numbers like `1.05` or `-10.5`.  
`1.0` is also a floating point number literal. This is due to the dot notation, even though it's technically a whole number.

## Vector
A vector is a type that groups exactly 3 floating point components.
It is used to represent coordinates, angles or colors in the game.

Creating a new vector can be done like this:

```lua
local my_vector = vector:new(1.0, 2.0, 3.0)

-- Statements below will be true
assert(my_vector.x == 1.0)
assert(my_vector.y == 2.0)
assert(my_vector.z == 3.0)
```

You can access the individual components using either `x`, `y` and `z` property accessors, or `r`, `g` and `b` (note that both notations are equivalent, meaning `x` ≘ `r`, `y` ≘ `g` and `z` ≘ `b`).

```lua
local my_vector = vector:new() -- vector is initialized as (0.0, 0.0, 0.0)
my_vector.x = 5.0
my_vector.y = 1.0
my_vector.z = 2.0

local val1 = my_vector.x -- val1 is 5.0
local val2 = my_vector.r -- val2 is also 5.0, as x and r are equivalent

-- The statements below are always true
assert(my_vector.y == my_vector.g)
assert(my_vector.z == my_vector.b)
```

## Entity
Entities represent 'things' that 'exist' in the game. Players are for example entities.  
Vehicles, hud elements, or the `level` are also entites.
They can fire events, but also call functions into the game's scripting environment.
Some entites also have certain fields (or properties), like an `origin` or a `name`.

# Events
Entites can fire events.
The concept was previously known as `notify` and `waittill` in GSC.  
Popular events are the `connected` event fired by the `level`, or the `spawned_player` event fired by players.

## Listening
You can listen to any of these events by calling either `onnotify` or `onnotifyonce` on an entity:

```lua
function player_connected(player)
  -- [...]
end

level:onnotify("connected", player_connected)
```

In the example above, the `player_connected` callback is called every time a player connects.
If you don't want to be notified every time, you can use `onnotifyonce` instead, which only fires once.

If you called `onnotify` (or `onnotifyonce`), but want to stop listening for notifications, you can call `clear` on the object is returned:

```lua
-- [...]

local listener = level:onnotify("connected", player_connected)

-- [...]

listener:clear() -- stops listening for the 'connected' event
```

Events can carry arguments. For example the `connected` event by the `level` carries the connecting player as an argument.
You can get these arguments by adding paramters to the callback functions, as seen in the `player_connected` callback above.

## Firing
To fire events, you can call the `notify` function on an entity: 

```lua
function player_connected(player)
  function my_callback()
    print("Yay")
  end

  player:onnotify("my_cool_event", my_callback)

  -- [...]

  -- This fires the 'my_cool_event' event
  player:notify("my_cool_event")
end
```

You can also pass arguments to the event (there can be any amount, but they must be instances of one of the 5 primitive types):

```lua
function player_connected(player)
  function my_callback(arg1, arg2)
    print(arg1 .. " " .. arg2)
  end

  player:onnotify("my_cool_event", my_callback)

  -- [...]

  -- This fires the 'my_cool_event' event
  player:notify("my_cool_event", "Hello", "World")
end
```

# Timers
- ontimeout
- oninterval

# Functions
- Member functions
- Global functions

# Fields
