@namespace
class SpriteKind:
    ghost = SpriteKind.create()

def on_overlap_tile(sprite2, location2):
    print("gamer over lose from fall")
    game.game_over(False)
scene.on_overlap_tile(SpriteKind.player, sprites.builtin.coral4, on_overlap_tile)

def on_up_pressed():
    global laser_y, laser_x
    laser_y = -100
    laser_x = 0
controller.up.on_event(ControllerButtonEvent.PRESSED, on_up_pressed)

def on_b_pressed():
    global paltfrom_spawn, last_use, projectile, laser_use, invincible_use, invincible_if
    if moves == 1:
        if paltfrom_if == True and (paltfrom_spawn == 1 or (paltfrom_spawn == 2 or paltfrom_spawn == 3)):
            tiles.set_wall_at(tiles.location_in_direction(tiles.location_of_sprite(mySprite),
                    CollisionDirection.BOTTOM),
                True)
            tiles.set_tile_at(tiles.location_in_direction(tiles.location_of_sprite(mySprite),
                    CollisionDirection.BOTTOM),
                assets.tile("""
                    myTile
                    """))
            paltfrom_spawn += 1
            print("spawned paltfrom")
    elif moves == 2:
        if game.runtime() - last_use > cooldown:
            last_use = game.runtime()
            controller.move_sprite(mySprite, 0, 0)
            mySprite.vx = dash
            mySprite.ay = 0
            pause(100)
            mySprite.vx = 0
            mySprite.ay = 200
            controller.move_sprite(mySprite, 60, 0)
            print("dashed")
    elif moves == 3:
        if wall_slide == True and game.runtime() - last_use > cooldown:
            last_use = game.runtime()
            controller.move_sprite(mySprite, 0, 0)
            mySprite.ay = 0
            mySprite.vy = 20
            print("wall slided")
    elif moves == 4 and (laser_use == 1 or laser_use == 2):
        projectile = sprites.create_projectile_from_sprite(img("""
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . 2 2 . . . . . . .
                . . . . . . 3 1 1 3 . . . . . .
                . . . . . 2 1 1 1 1 2 . . . . .
                . . . . . 2 1 1 1 1 2 . . . . .
                . . . . . . 3 1 1 3 . . . . . .
                . . . . . . . 2 2 . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                """),
            mySprite,
            laser_x,
            laser_y)
        laser_use += 1
        projectile.set_flag(SpriteFlag.GHOST_THROUGH_TILES, True)
        projectile.set_flag(SpriteFlag.GHOST_THROUGH_WALLS, True)
        print("shot laser")
    elif moves == 5 and invincible_use == 1:
        invincible_use += 1
        invincible_if = True
        print("used inviciblitiy")
        animation.run_image_animation(mySprite,
            [img("""
                . . . 5 1 5 f f f f f f 1 5 . .
                . . 5 1 f f e e e e f 2 f 1 5 .
                . . 1 f f e e e e f 2 2 2 f 1 .
                . . 1 f e e e f f e e e e f 1 5
                . . 1 f f f f e e 2 2 2 2 e f 1
                . 5 1 f e 2 2 2 f f f f e 2 f 1
                . 1 f f f f f f f e e e f f f 5
                . 5 f f e 4 4 e b f 4 4 e e f 1
                . 1 f e e 4 d 4 1 f d d e f 1 1
                . 5 1 f e e e 4 d d d d f 1 5 .
                . . 5 1 f f e e 4 4 4 e f 1 . .
                . . . 5 1 4 d d e 2 2 2 f 5 . .
                . . . . 1 e d d e 2 2 2 f 1 . .
                . . . . 5 f e e f 4 5 5 f 1 . .
                . . . . 5 1 f f f f f f 1 1 . .
                . . . . . 5 1 f f f 5 1 5 . . .
                """)],
            500,
            False)
        pause(5000)
        animation.run_image_animation(mySprite,
            [img("""
                    . . . 1 1 1 f f f f f f 1 1 . .
                    . . 1 1 f f e e e e f 2 f 1 1 .
                    . . 1 f f e e e e f 2 2 2 f 1 .
                    . . 1 f e e e f f e e e e f 1 1
                    . . 1 f f f f e e 2 2 2 2 e f 1
                    . 1 1 f e 2 2 2 f f f f e 2 f 1
                    . 1 f f f f f f f e e e f f f 1
                    . 1 f f e 4 4 e b f 4 4 e e f 1
                    . 1 f e e 4 d 4 1 f d d e f 1 1
                    . 1 1 f e e e 4 d d d d f 1 1 .
                    . . 1 1 f f e e 4 4 4 e f 1 . .
                    . . . 1 1 4 d d e 2 2 2 f 1 . .
                    . . . . 1 e d d e 2 2 2 f 1 . .
                    . . . . 1 f e e f 4 5 5 f 1 . .
                    . . . . 1 1 f f f f f f 1 1 . .
                    . . . . . 1 1 f f f 1 1 1 . . .
                    """),
                img("""
                    . . . . . . f f f f f f . . . .
                    . . . . f f e e e e f 2 f . . .
                    . . . f f e e e e f 2 2 2 f . .
                    . . . f e e e f f e e e e f . .
                    . . . f f f f e e 2 2 2 2 e f .
                    . . . f e 2 2 2 f f f f e 2 f .
                    . . f f f f f f f e e e f f f .
                    . . f f e 4 4 e b f 4 4 e e f .
                    . . f e e 4 d 4 1 f d d e f . .
                    . . . f e e e 4 d d d d f . . .
                    . . . . f f e e 4 4 4 e f . . .
                    . . . . . 4 d d e 2 2 2 f . . .
                    . . . . . e d d e 2 2 2 f . . .
                    . . . . . f e e f 4 5 5 f . . .
                    . . . . . . f f f f f f . . . .
                    . . . . . . . f f f . . . . . .
                    """)],
            500,
            False)
        invincible_if = False
        print(" inviciblitiy turned off")
controller.B.on_event(ControllerButtonEvent.PRESSED, on_b_pressed)

def on_a_pressed():
    global jump
    if jump > 0:
        mySprite.vy = -140
        jump += -1
        animation.run_image_animation(mySprite,
            [img("""
                    . . . . . . f f f f f f . . . .
                    . . . . f f e e e e f 2 f . . .
                    . . . f f e e e e f 2 2 2 f . .
                    . . . f e e e f f e e e e f . .
                    . . . f f f f e e 2 2 2 2 e f .
                    . . . f e 2 2 2 f f f f e 2 f .
                    . . f f f f f f f e e e f f f .
                    . . f f e 4 4 e b f 4 4 e e f .
                    . . f e e 4 d 4 1 f d d e f . .
                    . . . f e e e 4 d d d d f . . .
                    . . . . f f e e 4 4 4 e f . . .
                    . . . . . 4 d d e 2 2 2 f . . .
                    . 1 . . . e d d e 2 2 2 f . . 1
                    . . 1 . . f e e f 4 5 5 f . 1 .
                    . . . 1 . . f f f f f f . 1 . .
                    . . . . 1 1 1 f f f 1 1 1 . . .
                    """),
                img("""
                    . . . . . . f f f f f f . . . .
                    . . . . f f e e e e f 2 f . . .
                    . . . f f e e e e f 2 2 2 f . .
                    . . . f e e e f f e e e e f . .
                    . . . f f f f e e 2 2 2 2 e f .
                    . . . f e 2 2 2 f f f f e 2 f .
                    . . f f f f f f f e e e f f f .
                    . . f f e 4 4 e b f 4 4 e e f .
                    . . f e e 4 d 4 1 f d d e f . .
                    . . . f e e e 4 d d d d f . . .
                    . . . . f f e e 4 4 4 e f . . .
                    . . . . . 4 d d e 2 2 2 f . . .
                    . . . . . e d d e 2 2 2 f . . .
                    . . . . . f e e f 4 5 5 f . . .
                    . . . . . . f f f f f f . . . .
                    . . . . . . . f f f . . . . . .
                    """),
                img("""
                    . . . . . . . . . . . . . . . .
                    . . . . . . f f f f f f . . . .
                    . . . . f f e e e e f 2 f . . .
                    . . . f f e e e e f 2 2 2 f . .
                    . . . f e e e f f e e e e f . .
                    . . . f f f f e e 2 2 2 2 e f .
                    . . . f e 2 2 2 f f f f e 2 f .
                    . . f f f f f f f e e e f f f .
                    . . f f e 4 4 e b f 4 4 e e f .
                    . . f e e 4 d 4 1 f d d e f . .
                    . . . f e e e e e d d d f . . .
                    . . . . . f 4 d d e 4 e f . . .
                    . . . . . f e d d e 2 2 f . . .
                    . . . . f f f e e f 5 5 f f . .
                    . . . . f f f f f f f f f f . .
                    . . . . . f f . . . f f f . . .
                    """),
                img("""
                    . . . . . . f f f f f f . . . .
                    . . . . f f e e e e f 2 f . . .
                    . . . f f e e e e f 2 2 2 f . .
                    . . . f e e e f f e e e e f . .
                    . . . f f f f e e 2 2 2 2 e f .
                    . . . f e 2 2 2 f f f f e 2 f .
                    . . f f f f f f f e e e f f f .
                    . . f f e 4 4 e b f 4 4 e e f .
                    . . f e e 4 d 4 1 f d d e f . .
                    . . . f e e e 4 d d d d f . . .
                    . . . . f f e e 4 4 4 e f . . .
                    . . . . . 4 d d e 2 2 2 f . . .
                    . . . . . e d d e 2 2 2 f . . .
                    . . . . . f e e f 4 5 5 f . . .
                    . . . . . . f f f f f f . . . .
                    . . . . . . . f f f . . . . . .
                    """),
                img("""
                    . . . . . . . . . . . . . . . .
                    . . . . . . f f f f f f . . . .
                    . . . . f f e e e e f 2 f . . .
                    . . . f f e e e e f 2 2 2 f . .
                    . . . f e e e f f e e e e f . .
                    . . . f f f f e e 2 2 2 2 e f .
                    . . . f e 2 2 2 f f f f e 2 f .
                    . . f f f f f f f e e e f f f .
                    . . f f e 4 4 e b f 4 4 e e f .
                    . . f e e 4 d 4 1 f d d e f . .
                    . . . f e e e 4 d d d d f . . .
                    . . . . 4 d d e 4 4 4 e f . . .
                    . . . . e d d e 2 2 2 2 f . . .
                    . . . . f e e f 4 4 5 5 f f . .
                    . . . . f f f f f f f f f f . .
                    . . . . . f f . . . f f f . . .
                    """)],
            150,
            False)
        print("jumped/double jumped")
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def on_left_pressed():
    global dash, laser_x, laser_y
    animation.run_image_animation(mySprite,
        [img("""
                . . . . f f f f f f . . . . . .
                . . . f 2 f e e e e f f . . . .
                . . f 2 2 2 f e e e e f f . . .
                . . f e e e e f f e e e f . . .
                . f e 2 2 2 2 e e f f f f . . .
                . f 2 e f f f f 2 2 2 e f . . .
                . f f f e e e f f f f f f f . .
                . f e e 4 4 f b e 4 4 e f f . .
                . . f e d d f 1 4 d 4 e e f . .
                . . . f d d d d 4 e e e f . . .
                . . . f e 4 4 4 e e f f . . . .
                . . . f 2 2 2 e d d 4 . . . . .
                . . . f 2 2 2 e d d e . . . . .
                . . . f 5 5 4 f e e f . . . . .
                . . . . f f f f f f . . . . . .
                . . . . . . f f f . . . . . . .
                """),
            img("""
                . . . . . . . . . . . . . . . .
                . . . . f f f f f f . . . . . .
                . . . f 2 f e e e e f f . . . .
                . . f 2 2 2 f e e e e f f . . .
                . . f e e e e f f e e e f . . .
                . f e 2 2 2 2 e e f f f f . . .
                . f 2 e f f f f 2 2 2 e f . . .
                . f f f e e e f f f f f f f . .
                . f e e 4 4 f b e 4 4 e f f . .
                . . f e d d f 1 4 d 4 e e f . .
                . . . f d d d e e e e e f . . .
                . . . f e 4 e d d 4 f . . . . .
                . . . f 2 2 e d d e f . . . . .
                . . f f 5 5 f e e f f f . . . .
                . . f f f f f f f f f f . . . .
                . . . f f f . . . f f . . . . .
                """),
            img("""
                . . . . f f f f f f . . . . . .
                . . . f 2 f e e e e f f . . . .
                . . f 2 2 2 f e e e e f f . . .
                . . f e e e e f f e e e f . . .
                . f e 2 2 2 2 e e f f f f . . .
                . f 2 e f f f f 2 2 2 e f . . .
                . f f f e e e f f f f f f f . .
                . f e e 4 4 f b e 4 4 e f f . .
                . . f e d d f 1 4 d 4 e e f . .
                . . . f d d d d 4 e e e f . . .
                . . . f e 4 4 4 e e f f . . . .
                . . . f 2 2 2 e d d 4 . . . . .
                . . . f 2 2 2 e d d e . . . . .
                . . . f 5 5 4 f e e f . . . . .
                . . . . f f f f f f . . . . . .
                . . . . . . f f f . . . . . . .
                """),
            img("""
                . . . . . . . . . . . . . . . .
                . . . . f f f f f f . . . . . .
                . . . f 2 f e e e e f f . . . .
                . . f 2 2 2 f e e e e f f . . .
                . . f e e e e f f e e e f . . .
                . f e 2 2 2 2 e e f f f f . . .
                . f 2 e f f f f 2 2 2 e f . . .
                . f f f e e e f f f f f f f . .
                . f e e 4 4 f b e 4 4 e f f . .
                . . f e d d f 1 4 d 4 e e f . .
                . . . f d d d d 4 e e e f . . .
                . . . f e 4 4 4 e d d 4 . . . .
                . . . f 2 2 2 2 e d d e . . . .
                . . f f 5 5 4 4 f e e f . . . .
                . . f f f f f f f f f f . . . .
                . . . f f f . . . f f . . . . .
                """)],
        150,
        True)
    print("moved/held left")
    dash = -510
    laser_x = -100
    laser_y = 0
controller.left.on_event(ControllerButtonEvent.PRESSED, on_left_pressed)

def on_right_released():
    animation.stop_animation(animation.AnimationTypes.ALL, mySprite)
    print("released right")
controller.right.on_event(ControllerButtonEvent.RELEASED, on_right_released)

def on_left_released():
    animation.stop_animation(animation.AnimationTypes.ALL, mySprite)
    print("released left")
controller.left.on_event(ControllerButtonEvent.RELEASED, on_left_released)

def on_overlap_tile2(sprite3, location3):
    if exit2 == 5:
        print("gamer over win")
        game.game_over(True)
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.chest_open,
    on_overlap_tile2)

def on_overlap_tile3(sprite, location):
    global exit2
    tiles.set_tile_at(location, sprites.dungeon.dark_ground_center)
    info.change_score_by(1)
    exit2 += 1
    print("collected exit orb")
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        orange bauble
        """),
    on_overlap_tile3)

def on_right_pressed():
    global dash, laser_x, laser_y
    animation.run_image_animation(mySprite,
        [img("""
                . . . . . . f f f f f f . . . .
                . . . . f f e e e e f 2 f . . .
                . . . f f e e e e f 2 2 2 f . .
                . . . f e e e f f e e e e f . .
                . . . f f f f e e 2 2 2 2 e f .
                . . . f e 2 2 2 f f f f e 2 f .
                . . f f f f f f f e e e f f f .
                . . f f e 4 4 e b f 4 4 e e f .
                . . f e e 4 d 4 1 f d d e f . .
                . . . f e e e 4 d d d d f . . .
                . . . . f f e e 4 4 4 e f . . .
                . . . . . 4 d d e 2 2 2 f . . .
                . . . . . e d d e 2 2 2 f . . .
                . . . . . f e e f 4 5 5 f . . .
                . . . . . . f f f f f f . . . .
                . . . . . . . f f f . . . . . .
                """),
            img("""
                . . . . . . . . . . . . . . . .
                . . . . . . f f f f f f . . . .
                . . . . f f e e e e f 2 f . . .
                . . . f f e e e e f 2 2 2 f . .
                . . . f e e e f f e e e e f . .
                . . . f f f f e e 2 2 2 2 e f .
                . . . f e 2 2 2 f f f f e 2 f .
                . . f f f f f f f e e e f f f .
                . . f f e 4 4 e b f 4 4 e e f .
                . . f e e 4 d 4 1 f d d e f . .
                . . . f e e e e e d d d f . . .
                . . . . . f 4 d d e 4 e f . . .
                . . . . . f e d d e 2 2 f . . .
                . . . . f f f e e f 5 5 f f . .
                . . . . f f f f f f f f f f . .
                . . . . . f f . . . f f f . . .
                """),
            img("""
                . . . . . . f f f f f f . . . .
                . . . . f f e e e e f 2 f . . .
                . . . f f e e e e f 2 2 2 f . .
                . . . f e e e f f e e e e f . .
                . . . f f f f e e 2 2 2 2 e f .
                . . . f e 2 2 2 f f f f e 2 f .
                . . f f f f f f f e e e f f f .
                . . f f e 4 4 e b f 4 4 e e f .
                . . f e e 4 d 4 1 f d d e f . .
                . . . f e e e 4 d d d d f . . .
                . . . . f f e e 4 4 4 e f . . .
                . . . . . 4 d d e 2 2 2 f . . .
                . . . . . e d d e 2 2 2 f . . .
                . . . . . f e e f 4 5 5 f . . .
                . . . . . . f f f f f f . . . .
                . . . . . . . f f f . . . . . .
                """),
            img("""
                . . . . . . . . . . . . . . . .
                . . . . . . f f f f f f . . . .
                . . . . f f e e e e f 2 f . . .
                . . . f f e e e e f 2 2 2 f . .
                . . . f e e e f f e e e e f . .
                . . . f f f f e e 2 2 2 2 e f .
                . . . f e 2 2 2 f f f f e 2 f .
                . . f f f f f f f e e e f f f .
                . . f f e 4 4 e b f 4 4 e e f .
                . . f e e 4 d 4 1 f d d e f . .
                . . . f e e e 4 d d d d f . . .
                . . . . 4 d d e 4 4 4 e f . . .
                . . . . e d d e 2 2 2 2 f . . .
                . . . . f e e f 4 4 5 5 f f . .
                . . . . f f f f f f f f f f . .
                . . . . . f f . . . f f f . . .
                """)],
        150,
        True)
    print("moved/held right")
    dash = 510
    laser_x = 100
    laser_y = 0
controller.right.on_event(ControllerButtonEvent.PRESSED, on_right_pressed)

def load(level_1: number):
    global paltfrom_spawn, laser_use, invincible_use, ghost_spawn, exit2
    if level == 1:
        tiles.set_current_tilemap(tilemap("""
            level1
            """))
        scene.set_background_color(12)
        mySprite.say_text("level 1", 1000, False)
        paltfrom_spawn = 1
        laser_use = 1
        invincible_use = 1
        print("loaded level 1")
    elif level == 2:
        tiles.set_current_tilemap(tilemap("""
            level2
            """))
        scene.set_background_color(12)
        tiles.place_on_tile(mySprite, tiles.get_tile_location(0, 11))
        ghost_spawn = True
        paltfrom_spawn = 1
        game.show_long_text("Enemies will now come after u watch your lives jump on them to kill them.",
            DialogLayout.BOTTOM)
        mySprite.say_text("level 2", 1000, False)
        print("loaded level 2")
    elif level == 3:
        tiles.set_current_tilemap(tilemap("""
            level3
            """))
        scene.set_background_color(12)
        tiles.place_on_tile(mySprite, tiles.get_tile_location(0, 8))
        ghost_spawn = True
        mySprite.say_text("level 3", 1000, False)
        print("loaded level 3")
    elif level == 4:
        tiles.set_current_tilemap(tilemap("""
            level5
            """))
        scene.set_background_color(12)
        tiles.place_on_tile(mySprite, tiles.get_tile_location(0, 7))
        ghost_spawn = True
        exit2 = 0
        game.show_long_text("You will now have to collect 5 orbs which show how many u have in score to proceed. ",
            DialogLayout.BOTTOM)
        mySprite.say_text("level 4", 1000, False)
        print("loaded level 4")
    elif level == 5:
        tiles.set_current_tilemap(tilemap("""
            level6
            """))
        scene.set_background_color(12)
        tiles.place_on_tile(mySprite, tiles.get_tile_location(0, 9))
        ghost_spawn = True
        exit2 = 0
        mySprite.say_text("level 5", 1000, False)
        print("loaded level 5")

def on_overlap_tile4(sprite5, location4):
    global level, paltfrom_spawn, laser_use, invincible_use
    if exit2 == 5:
        level += 1
        load(level)
        info.set_life(5)
        info.set_score(0)
        paltfrom_spawn = 1
        laser_use = 1
        invincible_use = 1
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.collectible_insignia,
    on_overlap_tile4)

def on_on_overlap(sprite6, otherSprite2):
    otherSprite2.destroy()
    if sprite6.bottom < otherSprite2.y:
        sprite6.vy = -100
        print("killed ghost")
    elif invincible_if == False:
        info.change_life_by(-1)
        print("hit by ghost")
sprites.on_overlap(SpriteKind.player, SpriteKind.enemy, on_on_overlap)

def on_down_pressed():
    global laser_y, laser_x
    laser_y = 100
    laser_x = 0
controller.down.on_event(ControllerButtonEvent.PRESSED, on_down_pressed)

def on_life_zero():
    print("gamer over lose from enimie")
    game.game_over(False)
info.on_life_zero(on_life_zero)

def on_b_released():
    global wall_slide
    if moves == 3:
        controller.move_sprite(mySprite, 60, 0)
        mySprite.vy = 0
        mySprite.ay = 200
        wall_slide = False
controller.B.on_event(ControllerButtonEvent.RELEASED, on_b_released)

def on_on_overlap2(sprite4, otherSprite):
    sprites.destroy(otherSprite)
    print("laser killed enimie")
sprites.on_overlap(SpriteKind.projectile, SpriteKind.enemy, on_on_overlap2)

ghost_ai = False
ghost2: Sprite = None
invincible_if = False
projectile: Sprite = None
wall_slide = False
dash = 0
paltfrom_spawn = 0
paltfrom_if = False
invincible_use = 0
laser_use = 0
laser_x = 0
laser_y = 0
moves = 0
cooldown = 0
last_use = 0
exit2 = 0
ghost_spawn = False
jump = 0
mySprite: Sprite = None
level = 0
level = 1
mySprite = sprites.create(assets.image("""
    sprite 1
    """), SpriteKind.player)
mySprite.set_stay_in_screen(True)
controller.move_sprite(mySprite, 60, 0)
scene.camera_follow_sprite(mySprite)
mySprite.ay = 200
load(1)
tiles.place_on_tile(mySprite, tiles.get_tile_location(0, 1))
jump = 0
ghost_spawn = False
exit2 = 5
info.set_life(5)
info.set_score(0)
last_use = 0
cooldown = 1000
game.show_long_text("Your controls are left=left, right=right,a=jump and twice is a double jump.",
    DialogLayout.BOTTOM)
game.show_long_text("B is your special move type in 1 for spawning platforms below you(3 uses per level)",
    DialogLayout.BOTTOM)
game.show_long_text("Type in 2 for a dash(1 second cooldown)",
    DialogLayout.BOTTOM)
game.show_long_text("Type in 3 for a wall slide to slowly slide down a wall next to you(1 second cooldown)",
    DialogLayout.BOTTOM)
game.show_long_text("Type in 4 for a laser ball projectile to kill enemies(2 uses per level)",
    DialogLayout.BOTTOM)
game.show_long_text("Type in 5 for invincibility for 5 seconds(1 use per level).",
    DialogLayout.BOTTOM)
moves = game.ask_for_number("", 2)

def on_on_update():
    global paltfrom_if
    if mySprite.tile_kind_at(TileDirection.BOTTOM, assets.tile("""
        myTile
        """)):
        paltfrom_if = False
game.on_update(on_on_update)

def on_on_update2():
    global paltfrom_if
    if mySprite.is_hitting_tile(CollisionDirection.BOTTOM):
        paltfrom_if = False
game.on_update(on_on_update2)

def on_on_update3():
    global paltfrom_if
    if not (mySprite.is_hitting_tile(CollisionDirection.BOTTOM)):
        paltfrom_if = True
game.on_update(on_on_update3)

def on_on_update4():
    global wall_slide
    if mySprite.is_hitting_tile(CollisionDirection.RIGHT) or mySprite.is_hitting_tile(CollisionDirection.LEFT):
        wall_slide = True
game.on_update(on_on_update4)

def on_on_update5():
    global jump
    if mySprite.is_hitting_tile(CollisionDirection.BOTTOM):
        jump = 2
game.on_update(on_on_update5)

def on_on_update6():
    global ghost2, ghost_spawn, ghost_ai
    if ghost_spawn == True:
        for value3 in tiles.get_tiles_by_type(sprites.dungeon.floor_light0):
            ghost2 = sprites.create(img("""
                    ........................
                    ........................
                    ........................
                    ........................
                    ..........ffff..........
                    ........ff1111ff........
                    .......fb111111bf.......
                    .......f11111111f.......
                    ......fd11111111df......
                    ......fd11111111df......
                    ......fddd1111dddf......
                    ......fbdbfddfbdbf......
                    ......fcdcf11fcdcf......
                    .......fb111111bf.......
                    ......fffcdb1bdffff.....
                    ....fc111cbfbfc111cf....
                    ....f1b1b1ffff1b1b1f....
                    ....fbfbffffffbfbfbf....
                    .........ffffff.........
                    ...........fff..........
                    ........................
                    ........................
                    ........................
                    ........................
                    """),
                SpriteKind.enemy)
            ghost2.follow(mySprite, 30)
            tiles.place_on_tile(ghost2, value3)
            ghost_spawn = False
            ghost_ai = True
game.on_update(on_on_update6)

def on_on_update7():
    if ghost_ai == True:
        for value in sprites.all_of_kind(SpriteKind.enemy):
            if value.tile_kind_at(TileDirection.BOTTOM, sprites.dungeon.dark_ground_center):
                if value.is_hitting_tile(CollisionDirection.LEFT):
                    value.vy = -100
                elif value.is_hitting_tile(CollisionDirection.RIGHT):
                    value.vy = -100
            elif value.is_hitting_tile(CollisionDirection.LEFT):
                value.vx = 60
            elif value.is_hitting_tile(CollisionDirection.RIGHT):
                value.vx = -60
game.on_update(on_on_update7)

def on_on_update8():
    if ghost_ai == True:
        for value2 in sprites.all_of_kind(SpriteKind.enemy):
            if value2.is_hitting_tile(CollisionDirection.BOTTOM):
                if value2.is_hitting_tile(CollisionDirection.LEFT):
                    value2.vy = -100
                elif value2.is_hitting_tile(CollisionDirection.RIGHT):
                    value2.vy = -100
            elif value2.is_hitting_tile(CollisionDirection.LEFT):
                value2.vx = 60
            elif value2.is_hitting_tile(CollisionDirection.RIGHT):
                value2.vx = -60
game.on_update(on_on_update8)

def on_forever():
    music.play(music.string_playable("A C5 B C5 B A G F ", 110),
        music.PlaybackMode.UNTIL_DONE)
    music.play(music.string_playable("A C5 B C5 B A G F ", 110),
        music.PlaybackMode.UNTIL_DONE)
    music.play(music.string_playable("G B A F G B A F ", 110),
        music.PlaybackMode.UNTIL_DONE)
forever(on_forever)
