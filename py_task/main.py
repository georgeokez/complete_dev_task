
import pandas as pd

cvs_file = "anonoymous_data.csv"

#step 1: create a function which reads a csv and transforms into a dataframe
def loadCSV(csvFile):
    return pd.read_csv(csvFile)

df_data = loadCSV(cvs_file)

#step 2: create a new dataframe which counts the number of times each emotion appears

def countEmotions(df): 
    return df.groupby(['emotion_id','emotion','X','Y']).size().reset_index(name='count')

df_emotion = countEmotions(df_data)

#step 3: Export the new dataframe to a json file in the js_task folder to be used in part 2 - visualising

df_emotion.to_json('../js_task/emotion_data.json', orient='records')