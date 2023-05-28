Certainly! Here's the updated code that removes messages without an image or video and sends a DM to the sender requesting them to include a video or image:
```py
import discord
from discord.ext import commands
import json

intents = discord.Intents.default()
intents.message_content = True

bot = commands.Bot(command_prefix='!', intents=intents)

thread_channels = []
allowed_roles = ["Role1", "Role2"]  # Replace with the actual roles you want to allow
owner_id = "YOUR_OWNER_ID"  # Replace with your owner ID

def save_channels_to_file():
    with open('channels.json', 'w') as file:
        json.dump(thread_channels, file)

def load_channels_from_file():
    try:
        with open('channels.json', 'r') as file:
            data = json.load(file)
            if data:
                thread_channels.extend(data)
    except (FileNotFoundError, json.JSONDecodeError):
        pass

def get_channel(channel_id):
    return bot.get_channel(channel_id)

@bot.event
async def on_ready():
    print(f'Logged in as {bot.user.name}')
    load_channels_from_file()

@bot.event
async def on_message(message):
    if message.author == bot.user:
        return

    if message.channel.id in thread_channels:
        if not message.attachments:
            await message.delete()
            await message.author.send("Please include a video or image to have your message sent.")
        else:
            thread_name = f'Thread for {message.author.name}'
            await message.create_thread(name=thread_name, auto_archive_duration=60)

@bot.command()
@commands.has_any_role(*allowed_roles)
async def add_channel(ctx, channel: discord.TextChannel):
    if channel.id not in thread_channels:
        thread_channels.append(channel.id)
        save_channels_to_file()
        await ctx.send(f'{channel.mention} has been added.')
    else:
        await ctx.send(f'{channel.mention} is already in the list.')

@bot.command()
@commands.has_any_role(*allowed_roles)
async def remove_channel(ctx, channel: discord.TextChannel):
    if channel.id in thread_channels:
        thread_channels.remove(channel.id)
        save_channels_to_file()
        await ctx.send(f'{channel.mention} has been removed.')
    else:
        await ctx.send(f'{channel.mention} is not in the list.')

@bot.command()
@commands.has_any_role(*allowed_roles)
async def list_channels(ctx):
    if thread_channels:
        channels = '\n'.join([get_channel(channel_id).mention for channel_id in thread_channels])
        await ctx.send(f'Thread channels:\n{channels}')
    else:
        await ctx.send('No thread channels set.')

@bot.command()
async def invite_link(ctx):
    invite = await ctx.channel.create_invite()
    await ctx.send(f'Invite link: {invite.url}')

load_channels_from_file()
bot.run('YOUR_BOT_TOKEN')
```

In this updated version, the on_message event checks if the message contains any attachments (images or videos). If there are no attachments, the message gets deleted, and the sender receives a DM requesting them to include a video or image.

Again, make sure to replace 'YOUR_BOT_TOKEN' and 'YOUR_OWNER_ID' with your actual bot token and owner ID, respectively.

Let me know if there's anything else I can assist you with!
