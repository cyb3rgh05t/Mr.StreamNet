import discord
import logging
from discord.ext import commands


class Donate(commands.Cog):
    def __init__(self, bot):
        self.bot = bot

    @commands.command(name="donate", help="Sends the donate channel logo.")
    @commands.has_permissions(administrator=True)
    async def donate(self, ctx):
        """Send a donate channel logo as an image attachment and delete the command message."""
        try:
            # Delete the user's command message
            await ctx.message.delete()

            # Replace with the path to your local image file
            image_path = "./config/images/donate.png"

            # Create a file attachment
            file = discord.File(image_path, filename="donate.png")

            # Send the image in the channel
            await ctx.send(file=file)

        except Exception as e:
            await ctx.send("Some Error Occurred")
            # Log the error to the console
            print(f"Error sending the donate picture: {e}")


async def setup(bot):
    await bot.add_cog(Donate(bot))
    logging.info("Donate Logo cog loaded.")
