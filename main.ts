namespace SpriteKind {
    export const ghost = SpriteKind.create()
    export const powerup = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.coral4, function (sprite2, location2) {
    console.log("gamer over lose from fall")
    game.gameOver(false)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    laser_y = -100
    laser_x = 0
    if (moves == 3 && (is_wall_sliding == false && (!(mySprite.isHittingTile(CollisionDirection.Bottom)) && _3rd_move_set_jumps == 0))) {
        mySprite.vy = -140
        animation.runImageAnimation(
        mySprite,
        [img`
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
            `,img`
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
            `,img`
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
            `,img`
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
            `,img`
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
            `],
        150,
        false
        )
        _3rd_move_set_jumps += 1
        console.log("3rd move set air jump")
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (moves == 1) {
        if (paltfrom_if == true && (paltfrom_spawn == 1 || (paltfrom_spawn == 2 || paltfrom_spawn == 3))) {
            tiles.setWallAt(tiles.locationInDirection(tiles.locationOfSprite(mySprite), CollisionDirection.Bottom), true)
            tiles.setTileAt(tiles.locationInDirection(tiles.locationOfSprite(mySprite), CollisionDirection.Bottom), assets.tile`myTile`)
            paltfrom_spawn += 1
            console.log("spawned paltfrom")
        }
    } else if (moves == 2) {
        if (game.runtime() - last_use > cooldown) {
            last_use = game.runtime()
            controller.moveSprite(mySprite, 0, 0)
            mySprite.vx = dash
            mySprite.ay = 0
            pause(100)
            mySprite.vx = 0
            mySprite.ay = 200
            controller.moveSprite(mySprite, 60, 0)
            console.log("dashed")
        }
    } else if (moves == 3) {
        if (wall_slide == true && game.runtime() - last_use > cooldown) {
            last_use = game.runtime()
            controller.moveSprite(mySprite, 0, 0)
            mySprite.ay = 0
            mySprite.vy = 20
            is_wall_sliding = true
            console.log("wall slided")
        }
    } else if (moves == 4 && (laser_use == 1 || laser_use == 2)) {
        projectile = sprites.createProjectileFromSprite(img`
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
            `, mySprite, laser_x, laser_y)
        laser_use += 1
        projectile.setFlag(SpriteFlag.GhostThroughTiles, true)
        projectile.setFlag(SpriteFlag.GhostThroughWalls, true)
        console.log("shot laser")
    } else if (moves == 5 && invincible_use == 1) {
        invincible_use += 1
        invincible_if = true
        console.log("used inviciblitiy")
        animation.runImageAnimation(
        mySprite,
        [img`
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
            `],
        500,
        false
        )
        pause(5000)
        animation.runImageAnimation(
        mySprite,
        [img`
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
            `,img`
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
            `],
        500,
        false
        )
        invincible_if = false
        console.log(" inviciblitiy turned off")
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (is_wall_sliding == false) {
        if (jump > 0) {
            mySprite.vy = -140
            jump += -1
            animation.runImageAnimation(
            mySprite,
            [img`
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
                `,img`
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
                `,img`
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
                `,img`
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
                `,img`
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
                `],
            150,
            false
            )
            console.log("jumped/double jumped")
        }
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
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
        `,img`
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
        `,img`
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
        `,img`
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
        `],
    150,
    true
    )
    console.log("moved/held left")
    dash = -510
    laser_x = -100
    laser_y = 0
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
    console.log("released right")
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
    console.log("released left")
})
info.onCountdownEnd(function () {
    console.log("game over loss from timer")
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestOpen, function (sprite3, location3) {
    if (exit2 == 5) {
        blockSettings.clear()
        console.log("gamer over win")
        game.gameOver(true)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`orange bauble`, function (sprite, location) {
    tiles.setTileAt(location, sprites.dungeon.darkGroundCenter)
    info.changeScoreBy(1)
    exit2 += 1
    console.log("collected exit orb")
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
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
        `,img`
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
        `,img`
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
        `,img`
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
        `],
    150,
    true
    )
    console.log("moved/held right")
    dash = 510
    laser_x = 100
    laser_y = 0
})
function load (level_1: number) {
    if (level == 1) {
        tiles.setCurrentTilemap(tilemap`level1`)
        scene.setBackgroundColor(12)
        mySprite.sayText("level 1", 1000, false)
        paltfrom_spawn = 1
        laser_use = 1
        invincible_use = 1
        console.log("loaded level 1")
    } else if (level == 2) {
        tiles.setCurrentTilemap(tilemap`level2`)
        scene.setBackgroundColor(12)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 11))
        ghost_spawn = true
        paltfrom_spawn = 1
        blockSettings.writeNumber("level", 2)
        game.showLongText("Enemies will now come after u watch your lives jump on them to kill them.", DialogLayout.Bottom)
        mySprite.sayText("level 2", 1000, false)
        console.log("loaded level 2")
    } else if (level == 3) {
        tiles.setCurrentTilemap(tilemap`level3`)
        scene.setBackgroundColor(12)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 8))
        ghost_spawn = true
        count_down_if = true
        game.showLongText("You will now have to beat a timer good luck.", DialogLayout.Bottom)
        mySprite.sayText("level 3", 1000, false)
        info.startCountdown(60)
        blockSettings.writeNumber("level", 3)
        blockSettings.writeNumber("count down if", 1)
        console.log("loaded level 3")
    } else if (level == 4) {
        tiles.setCurrentTilemap(tilemap`level5`)
        scene.setBackgroundColor(12)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 7))
        ghost_spawn = true
        exit2 = 0
        game.showLongText("You will now have to collect 5 orbs which show how many u have in score to proceed. ", DialogLayout.Bottom)
        mySprite.sayText("level 4", 1000, false)
        blockSettings.writeNumber("level", 4)
        console.log("loaded level 4")
    } else if (level == 5) {
        tiles.setCurrentTilemap(tilemap`level6`)
        scene.setBackgroundColor(12)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 9))
        ghost_spawn = true
        exit2 = 0
        mySprite.sayText("level 5", 1000, false)
        blockSettings.writeNumber("level", 5)
        console.log("loaded level 5")
    } else if (level == 6) {
        tiles.setCurrentTilemap(tilemap`level7`)
        scene.setBackgroundColor(12)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 9))
        ghost_spawn = true
        exit2 = 0
        mySprite.sayText("level 6", 1000, false)
        blockSettings.writeNumber("level", 6)
        console.log("loaded level 6")
    } else if (level == 7) {
        tiles.setCurrentTilemap(tilemap`level8`)
        scene.setBackgroundColor(12)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 9))
        ghost_spawn = true
        exit2 = 0
        mySprite.sayText("level 7", 1000, false)
        blockSettings.writeNumber("level", 7)
        console.log("loaded level 7")
    } else if (level == 8) {
        tiles.setCurrentTilemap(tilemap`level9`)
        scene.setBackgroundColor(12)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 9))
        ghost_spawn = true
        exit2 = 0
        mySprite.sayText("level 8", 1000, false)
        blockSettings.writeNumber("level", 8)
        console.log("loaded level 8")
    }
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleInsignia, function (sprite5, location4) {
    if (exit2 == 5) {
        info.stopCountdown()
        level += 1
        info.setLife(5)
        info.setScore(0)
        speed = false
        controller.moveSprite(mySprite, 60, 0)
        paltfrom_spawn = 1
        laser_use = 1
        invincible_use = 1
        if (level >= 3) {
            count_down_if = true
        }
        if (count_down_if == true) {
            info.startCountdown(60)
            blockSettings.writeNumber("count down if", 1)
        }
        for (let value of sprites.allOfKind(SpriteKind.powerup)) {
            sprites.destroy(value)
        }
        load(level)
        if (level >= 2) {
            power_up_roll = randint(1, 100)
            if (power_up_roll <= 40) {
                power_up_sprite = sprites.create(power_ups[1], SpriteKind.powerup)
                tiles.placeOnRandomTile(power_up_sprite, sprites.dungeon.floorLight1)
                power_up_sprite.y += -16
            } else if (power_up_roll <= 65) {
                power_up_sprite = sprites.create(power_ups[4], SpriteKind.powerup)
                tiles.placeOnRandomTile(power_up_sprite, sprites.dungeon.floorLight1)
                power_up_sprite.y += -16
            } else if (power_up_roll <= 83) {
                if (level >= 6) {
                    power_up_sprite = sprites.create(power_ups[3], SpriteKind.powerup)
                    tiles.placeOnRandomTile(power_up_sprite, sprites.dungeon.floorLight1)
                    power_up_sprite.y += -16
                }
            } else if (power_up_roll <= 95) {
                power_up_sprite = sprites.create(power_ups[2], SpriteKind.powerup)
                tiles.placeOnRandomTile(power_up_sprite, sprites.dungeon.floorLight1)
                power_up_sprite.y += -16
            } else {
                power_up_sprite = sprites.create(power_ups[0], SpriteKind.powerup)
                tiles.placeOnRandomTile(power_up_sprite, sprites.dungeon.floorLight1)
                power_up_sprite.y += -16
            }
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite6, otherSprite2) {
    otherSprite2.destroy()
    if (sprite6.bottom < otherSprite2.y) {
        sprite6.vy = -100
        console.log("killed ghost")
    } else if (invincible_if == false) {
        info.changeLifeBy(-1)
        console.log("hit by ghost")
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    laser_y = 100
    laser_x = 0
    if (moves == 2 && !(mySprite.isHittingTile(CollisionDirection.Bottom))) {
        mySprite.vy += 500
        console.log("grounded pounded")
    }
    if (moves == 1 && mySprite.tileKindAt(TileDirection.Bottom, assets.tile`myTile`)) {
        tiles.setTileAt(tiles.locationInDirection(tiles.locationOfSprite(mySprite), CollisionDirection.Bottom), sprites.dungeon.darkGroundCenter)
        tiles.setWallAt(tiles.locationInDirection(tiles.locationOfSprite(mySprite), CollisionDirection.Bottom), false)
        console.log("deleted paltfrom")
    }
})
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    blockSettings.clear()
    game.reset()
})
info.onLifeZero(function () {
    console.log("gamer over lose from enimie")
    game.gameOver(false)
})
controller.B.onEvent(ControllerButtonEvent.Released, function () {
    if (moves == 3) {
        controller.moveSprite(mySprite, 60, 0)
        mySprite.vy = 0
        mySprite.ay = 200
        wall_slide = false
        is_wall_sliding = false
        wall_jumps = 0
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite4, otherSprite) {
    sprites.destroy(otherSprite)
    console.log("laser killed enimie")
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.powerup, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    if (power_up_roll <= 40) {
        controller.moveSprite(mySprite, 120, 0)
        speed = true
    } else if (power_up_roll <= 65) {
    	
    } else if (power_up_roll <= 83) {
        rotten_ham_roll = randint(1, 2)
        if (rotten_ham_roll == 1) {
            info.changeLifeBy(-1)
        } else if (rotten_ham_roll == 2) {
            info.changeLifeBy(-2)
        }
    } else if (power_up_roll <= 95) {
        if (level >= 3) {
            info.changeCountdownBy(10)
        }
    } else {
        info.changeLifeBy(3)
    }
})
let path_finding: tiles.Location[] = []
let ghost_ai = false
let ghost2: Sprite = null
let rotten_ham_roll = 0
let speed = false
let invincible_if = false
let projectile: Sprite = null
let wall_slide = false
let dash = 0
let paltfrom_if = false
let _3rd_move_set_jumps = 0
let laser_x = 0
let laser_y = 0
let power_up_sprite: Sprite = null
let power_up_roll = 0
let cooldown = 0
let last_use = 0
let exit2 = 0
let ghost_spawn = false
let is_wall_sliding = false
let wall_jumps = 0
let jump = 0
let count_down_if = false
let invincible_use = 0
let laser_use = 0
let paltfrom_spawn = 0
let moves = 0
let mySprite: Sprite = null
let level = 0
let power_ups: Image[] = []
power_ups = [
img`
    ....................
    ....................
    ....ffff...ffff.....
    ...f2222f.f2222f....
    ..f222222f222222f...
    .f222222222222222f..
    .f222222222222222f..
    .f222222222222222f..
    .f222222222222222f..
    .f222222222222222f..
    .f222222222222222f..
    ..f2222222222222f...
    ...f22222222222f....
    ....f222222222f.....
    .....f2222222f......
    ......f22222f.......
    .......f222f........
    ........f2f.........
    .........f..........
    ....................
    `,
img`
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ........eee.........
    .......19991........
    ......1999991.......
    .....199999991......
    .....199999991......
    .....199999991......
    .....199999991......
    .....199999991......
    .....199999991......
    .....199999991......
    ......1999991.......
    .......11111........
    ....................
    `,
assets.image`clock`,
assets.image`rotten ham`,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `
]
level = 1
mySprite = sprites.create(assets.image`sprite 1`, SpriteKind.Player)
mySprite.setFlag(SpriteFlag.GhostThroughTiles, false)
mySprite.setStayInScreen(true)
controller.moveSprite(mySprite, 60, 0)
scene.cameraFollowSprite(mySprite)
mySprite.ay = 200
if (blockSettings.exists("level")) {
    level = blockSettings.readNumber("level")
    moves = blockSettings.readNumber("move save")
    paltfrom_spawn = 1
    laser_use = 1
    invincible_use = 1
}
count_down_if = false
invincible_use = 0
jump = 0
wall_jumps = 0
is_wall_sliding = false
ghost_spawn = false
exit2 = 5
info.setLife(5)
info.setScore(0)
last_use = 0
cooldown = 1000
load(1)
if (level >= 2 && blockSettings.exists("level")) {
    pause(200)
    power_up_roll = randint(1, 100)
    if (power_up_roll <= 40) {
        power_up_sprite = sprites.create(power_ups[1], SpriteKind.powerup)
        tiles.placeOnRandomTile(power_up_sprite, sprites.dungeon.floorLight1)
        power_up_sprite.y += -16
    } else if (power_up_roll <= 65) {
        power_up_sprite = sprites.create(power_ups[4], SpriteKind.powerup)
        tiles.placeOnRandomTile(power_up_sprite, sprites.dungeon.floorLight1)
        power_up_sprite.y += -16
    } else if (power_up_roll <= 83) {
        if (level >= 6) {
            power_up_sprite = sprites.create(power_ups[3], SpriteKind.powerup)
            tiles.placeOnRandomTile(power_up_sprite, sprites.dungeon.floorLight1)
            power_up_sprite.y += -16
        }
    } else if (power_up_roll <= 95) {
        power_up_sprite = sprites.create(power_ups[2], SpriteKind.powerup)
        tiles.placeOnRandomTile(power_up_sprite, sprites.dungeon.floorLight1)
        power_up_sprite.y += -16
    } else {
        power_up_sprite = sprites.create(power_ups[0], SpriteKind.powerup)
        tiles.placeOnRandomTile(power_up_sprite, sprites.dungeon.floorLight1)
        power_up_sprite.y += -16
    }
    if (blockSettings.exists("count down if")) {
        info.startCountdown(60)
    }
}
if (level == 1) {
    tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 1))
    game.showLongText("Your controls are left=left, right=right,a=jump and twice is a double jump also use menu to reset the game and use reset to reset the level this game auto saves.", DialogLayout.Bottom)
    game.showLongText("B is your special move type in 1 for spawning platforms below you(3 uses per level)use down on top of one to delete it.", DialogLayout.Bottom)
    game.showLongText("Type in 2 for a dash(1 second cooldown)use down for a ground slam. ", DialogLayout.Bottom)
    game.showLongText("Type in 3 for a wall slide to slowly slide down a wall next to you(1 second cooldown)use up mid air for an extra jump and use b constantly to dampen your fall.", DialogLayout.Bottom)
    game.showLongText("Type in 4 for a laser ball projectile to kill enemies(2 uses per level)", DialogLayout.Bottom)
    game.showLongText("Type in 5 for invincibility for 5 seconds(1 use per level).", DialogLayout.Bottom)
    moves = game.askForNumber("", 2)
    blockSettings.writeNumber("move save", moves)
}
game.onUpdate(function () {
    if (ghost_spawn == true) {
        for (let value3 of tiles.getTilesByType(sprites.dungeon.floorLight0)) {
            ghost2 = sprites.create(img`
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
                `, SpriteKind.Enemy)
            tiles.placeOnTile(ghost2, value3)
            ghost2.y += -16
            ghost_spawn = false
            ghost_ai = true
        }
    }
})
game.onUpdate(function () {
    if (mySprite.tileKindAt(TileDirection.Bottom, assets.tile`myTile`)) {
        paltfrom_if = false
    }
})
game.onUpdate(function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        paltfrom_if = false
    }
})
game.onUpdate(function () {
    if (!(mySprite.isHittingTile(CollisionDirection.Bottom))) {
        paltfrom_if = true
    }
})
game.onUpdate(function () {
    if (mySprite.isHittingTile(CollisionDirection.Right) || mySprite.isHittingTile(CollisionDirection.Left)) {
        wall_slide = true
    }
})
game.onUpdate(function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        jump = 2
    }
})
game.onUpdate(function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        _3rd_move_set_jumps = 0
    }
})
game.onUpdate(function () {
    if (speed == true && power_up_roll <= 40) {
        controller.moveSprite(mySprite, 120, 0)
    }
})
game.onUpdate(function () {
    if (mySprite.tileKindAt(TileDirection.Bottom, assets.tile`ghost block aka disapearing paltfrom`)) {
        tiles.setTileAt(tiles.locationInDirection(tiles.locationOfSprite(mySprite), CollisionDirection.Bottom), sprites.dungeon.darkGroundCenter)
        tiles.setWallAt(tiles.locationInDirection(tiles.locationOfSprite(mySprite), CollisionDirection.Bottom), false)
        jump = 2
    } else if (mySprite.tileKindAt(TileDirection.Top, assets.tile`ghost block aka disapearing paltfrom`)) {
        tiles.setTileAt(tiles.locationInDirection(tiles.locationOfSprite(mySprite), CollisionDirection.Top), sprites.dungeon.darkGroundCenter)
        tiles.setWallAt(tiles.locationInDirection(tiles.locationOfSprite(mySprite), CollisionDirection.Top), false)
    } else if (mySprite.tileKindAt(TileDirection.Left, assets.tile`ghost block aka disapearing paltfrom`)) {
        tiles.setTileAt(tiles.locationInDirection(tiles.locationOfSprite(mySprite), CollisionDirection.Left), sprites.dungeon.darkGroundCenter)
        tiles.setWallAt(tiles.locationInDirection(tiles.locationOfSprite(mySprite), CollisionDirection.Left), false)
    } else if (mySprite.tileKindAt(TileDirection.Right, assets.tile`ghost block aka disapearing paltfrom`)) {
        tiles.setTileAt(tiles.locationInDirection(tiles.locationOfSprite(mySprite), CollisionDirection.Right), sprites.dungeon.darkGroundCenter)
        tiles.setWallAt(tiles.locationInDirection(tiles.locationOfSprite(mySprite), CollisionDirection.Right), false)
    }
})
forever(function () {
    music.play(music.stringPlayable("A C5 B C5 B A G F ", 110), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("A C5 B C5 B A G F ", 110), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("G B A F G B A F ", 110), music.PlaybackMode.UntilDone)
})
game.onUpdateInterval(500, function () {
    if (ghost_ai == true) {
        for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
            path_finding = scene.aStar(value.tilemapLocation(), mySprite.tilemapLocation())
            scene.followPath(value, path_finding, 50)
        }
    }
})
