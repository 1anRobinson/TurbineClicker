class Sprite
{
    constructor({image, position = {x:0,y:0}, frames = {max: 1}})
    {
        this.image = image
        this.position = position
        this.frames = {...frames, val: 0, delay:0}
        

        this.image.onload = () =>
        {
            this.width = this.image.width / this.frames.max
        }
    }

    draw()
    {
        c.drawImage
        (
            this.image, 
            this.frames.val * this.width, // x coordinate to start cropping from
            0, // y coordinate to start cropping from
            this.image.width / this.frames.max, // crop width for a single frame
            this.image.height, // crop height for layers
            this.position.x, // x position
            this.position.y, // y position
            this.image.width / this.frames.max,
            this.image.height
        )

        if(this.frames.max>1)
        {
            this.frames.delay++
        }

        if(this.frames.delay %45==0)
        {
            if(this.frames.val < this.frames.max - 1)
            {
                this.frames.val++
            }
            else{this.frames.val = 0}
        }
        
    }
}