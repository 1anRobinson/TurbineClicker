class Sprite
{
    constructor({image, frames = {max: 1}})
    {
        this.image = image;
        this.frames = {...frames, val: 0};

        this.image.onload = () =>
        {
            this.width = this.image.width / this.frames.max
            this.height = this.image.height
        }
    }

    draw()
    {
        c.drawImage(
            this.image, 
            this.frames.val * this.width,
            this.frames.val * this.height,
            this.image.width / this.frames.max,
            this.image.height,
            this.image.width / this.frames.max,
            this.image.height
        )
        if(this.frames.val < this.frames.max)
        {
            this.frames.val++;
        }
        else{this.frames.val = 0;}
        
    }
}

class Boundary
{
    static width = 98;
    static height = 138;
    constructor ({position})
    {
        this.position = position;
        this.width = 98;
        this.height = 138;
    }
}

