from transformers import MBartForConditionalGeneration, MBart50TokenizerFast

def translate(text, src_lang, tgt_lang):
    model_name = "facebook/mbart-large-50-many-to-many-mmt"
    tokenizer = MBart50TokenizerFast.from_pretrained(model_name)
    model = MBartForConditionalGeneration.from_pretrained(model_name)
    
    tokenizer.src_lang = src_lang
    encoded = tokenizer(text, return_tensors="pt")
    
    generated_tokens = model.generate(
        **encoded,
        forced_bos_token_id=tokenizer.lang_code_to_id[tgt_lang]
    )
    
    return tokenizer.batch_decode(generated_tokens, skip_special_tokens=True)[0]

if __name__ == "__main__":
    text = "यह एक परीक्षण है"
    src_lang = "hi_IN"     # Hindi
    tgt_lang = "en_XX"     # English
    
    translation = translate(text, src_lang, tgt_lang)
    print(f"Translation: {translation}")
