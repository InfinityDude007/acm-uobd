import asyncpg
import os, ssl
from dotenv import load_dotenv

load_dotenv()

DB_URL = os.getenv("SUPABASE_DB_URL")
SSL_CERT = os.getenv("DATABASE_SSL_CERT")

_pool = None

def get_ssl_context():
    context = ssl.create_default_context(cafile=SSL_CERT)
    context.check_hostname = True
    context.verify_mode = ssl.CERT_REQUIRED
    return context

async def get_pool():
    global _pool
    if _pool is None:
        _pool = await asyncpg.create_pool(dsn=DB_URL, ssl=get_ssl_context())
    return _pool

async def fetch(query, *args):
    pool = await get_pool()
    async with pool.acquire() as conn:
        rows = await conn.fetch(query, *args)
        return [dict(r) for r in rows]

async def execute(query, *args):
    pool = await get_pool()
    async with pool.acquire() as conn:
        await conn.execute(query, *args)
